import { Link } from 'react-router-dom';
import ThreadActionComponent from './ThreadActionComponent';
import CommentComponent from './comment/CommentComponent';

function ThreadComponent({data}) {
  console.log(data)
  return (
    <div className='border border-gray-200 pb-5 m-2 shadow'>
      <Link to={`/thread/${data.id}`} className="block p-6 bg-whit hover:bg-gray-100 m-auto">
        <div className="flex p-4 border-b border-gray-300">
          <img
            src={'https://prod-images-static.radiopaedia.org/avatars/20479/facebook-blank-face-blank.jpeg'}
            alt={`${data.user.name}'s avatar`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-gray-500 text-sm ml-2">@{data.user.name}</span>
              <span className="text-gray-500 text-sm ml-2">{data.created_at.split('T')[0]}</span>
            </div>
            <p className="mt-2">{data.title}</p>
          </div>
        </div>
        <p className="font-normal text-gray-500">{data.description}</p>
      </Link>
      <ThreadActionComponent id={data.id}/>
      {data.comment && (
        <div className="border mx-4">
          <CommentComponent 
            author={data.comment.name}
            username={data.comment.name}
            timestamp={data.comment.created_at}
            content={data.comment.comment}
            comment_id={data.comment.id}
            key={data.comment.id}
            thread_id={data.comment.threads_id}
          />
        </div>
      )}
    </div>
  );
}

export default ThreadComponent;
