import CommentComponent from './CommentComponent';

const Comment = ({ comment, thread_id }) => {
  const { author, username, timestamp, content, id } = comment;
  return (
    <div className="ml-4 border-l pl-4 ">
      <CommentComponent
        author={author}
        username={username}
        timestamp={timestamp}
        content={content}
        comment_id={id}
        key={comment.id}
        thread_id={thread_id}
      />
      {comment && comment.children && comment.children.length > 0 && (
        <CommentTreeComponent comments={comment.children} />
      )}
    </div>
  );
};

const CommentTreeComponent = ({ comments, thread_id }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} thread_id={thread_id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentTreeComponent;