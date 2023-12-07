import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllThreads } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import ThreadListComponent from '../components/thread/ThreadListComponent';
import AddThreadButton from '../components/buttons/AddThreadButton';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [threads, setThreads] = useState([]);
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    const fetchThreads = async () => {
      const { data } = await getAllThreads(page);
      
      setThreads(prevThreads => [...prevThreads, ...data]);
      setHasMore(data.length > 0)
      setLoading(false);
    };

    fetchThreads();
  }, [page]);

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (observer.current && !loading) {
      observer.current.observe(document.querySelector('#bottom-of-page'));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, hasMore]);

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
    setKeyword(keyword);
  };

  const filteredThreads = threads.filter((thread) => thread.title.toLowerCase().includes(
    keyword.toLowerCase(),
  ));

  return (
    <section className="homepage">
      <h1 className="my-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Threads</h1>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <ThreadListComponent threads={filteredThreads} loading={loading} />
      <AddThreadButton />
      <div id="bottom-of-page"></div>
    </section>
  );
}

export default HomePage;
