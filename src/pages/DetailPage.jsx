import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

import NotFoundPage from './NotFoundPage';
import LoadingMessage from '../components/LoadingMessage';
import ThreadComponent from '../components/thread/ThreadComponent';
import CommentTreeComponent from '../components/thread/comment/CommentTreeComponent';


import { getThread, getComment } from '../utils/network-data';

function DetailPage() {
  const [thread, setThread] = useState({});
  const [comments, setComment] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const { data } = await getThread(id);
      setThread(data);
      const { comments } = await getComment(id);
      setComment(comments);

      setLoading(false);
    };

    fetchThread();
  }, []);

  if (loading) {
    return <LoadingMessage />;
  }

  if (!thread) {
    return <NotFoundPage />;
  }


  return (
    <div>
      <div className="mx-72 px-10 pb-10 bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex mt-10">
          <div className="flex-none w-[400px]">
            <ThreadComponent data={thread} key={thread.id} />

          </div>
          <div className="flex-1">
            <CommentTreeComponent comments={comments} thread_id={thread.id} id={id}/>
          </div>
        </div>
      </div>
      <Link to="/" className='fixed z-90 bottom-10 right-8 justify-center items-center text-white flex text-2xl p-0 w-16 h-12 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'>
          <MdOutlineKeyboardArrowLeft />
      </Link>
    </div>
  );
}

export default DetailPage;
