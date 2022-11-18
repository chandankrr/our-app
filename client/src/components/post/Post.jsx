import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import Comments from '../comments/Comments';
import './post.scss';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img
              src={user.profilePicture || PF + 'person/noAvatar.png'}
              alt=""
            />
            <div className="details">
              <Link
                to={`profile/${user.username}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="name">{user.username}</span>
              </Link>
              <span className="date">{format(post.createdAt)}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={PF + post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {isLiked ? (
              <FavoriteOutlinedIcon
                onClick={likeHandler}
                style={{ color: '#f0544f' }}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={likeHandler} />
            )}
            {`${like} Likes`}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
