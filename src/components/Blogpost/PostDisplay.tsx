function PostDisplay({ posts, onDeletePost }) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {posts.map((post, index) => (
        <div key={index} className="post-box">
          <h3>Title: {post.title}</h3>
          <p>Description : {post.description}</p>
          <button onClick={() => onDeletePost(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;
