import ThreadActionComponent from "../ThreadActionComponent";

const CommentComponent = ({ author, username, timestamp, content, comment_id, thread_id }) => {
  return (
    <div className="border-b border-gray-300">
      <div className="flex p-4">
        <img
          src={"https://prod-images-static.radiopaedia.org/avatars/20479/facebook-blank-face-blank.jpeg"}
          alt={`${author}'s avatar`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="font-semibold">{author}</span>
            <span className="text-gray-500 text-sm ml-2">@{username}</span>
            <span className="text-gray-500 text-sm ml-2">{timestamp && timestamp.split("T")[0]}</span>
          </div>
          <p className="mt-2">{content}</p>
        </div>
      </div>
      <ThreadActionComponent id={thread_id} comment_id={comment_id}/>
    </div>
  );
};

export default CommentComponent;