import { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Blogpost() {
  const [posts, setPosts] = useState([]);
  const handleCreatePost = (title, description) => {
    const newPost = { title, description };
    setPosts([...posts, newPost]);
  };
  const handleDeletePost = (index) => {
    const updatePost = posts.filter((_, i) => i !== index);
    setPosts(updatePost);
  };
  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input onCreatePost={handleCreatePost} />
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} onDeletePost={handleDeletePost} />
      </div>
    </div>
  );
}

export default Blogpost;
