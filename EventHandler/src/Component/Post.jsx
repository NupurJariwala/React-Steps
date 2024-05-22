const Post = ({ title, body }) => {
  return (
    <div id="post">
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
  );
};
export default Post;
