import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMentionThreads } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import ThreadListComponent from '../components/thread/ThreadListComponent';
import AddThreadButton from '../components/buttons/AddThreadButton';

function MentionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [threads, setThreads] = useState([]);
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') || '');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThreads = async () => {
      const {data} = await getMentionThreads();

      if (data !== null) {
        setThreads(data);
      }
      setLoading(false);
    };

    fetchThreads();
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams(keyword);
    setKeyword(keyword);
  };

  // const filteredThreads = threads.filter((thread) => thread.title.toLowerCase().includes(
  //   keyword.toLowerCase(),
  // ));

  const filteredThreads = threads.filter((thread) => thread.title.toLowerCase().includes(
    keyword.toLowerCase(),
  ));

  return (
    <section>
      <h1 className="my-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">Threads Mention</h1>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <ThreadListComponent threads={filteredThreads} loading={loading} />
      <div>
        <AddThreadButton />
      </div>
    </section>
  );
}

export default MentionPage;
