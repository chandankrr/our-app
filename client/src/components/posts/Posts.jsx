import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from '../post/Post';
import './posts.scss';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/63695d4348789174064c589d');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
