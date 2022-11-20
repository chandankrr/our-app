import PlaceIcon from '@mui/icons-material/Place';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Posts from '../../components/posts/Posts';
import { AuthContext } from '../../context/AuthContext';
import './profile.scss';

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?.id));
  }, [currentUser, user?.id]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user._id]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put('/users/' + user._id + '/unfollow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user._id });
      } else {
        await axios.put('/users/' + user._id + '/follow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'FOLLOW', payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div className="profile">
      <div className="images">
        <img
          src={
            user.coverPicter ? PF + user.coverPicter : PF + 'person/noCover.png'
          }
          alt=""
          className="cover"
        />
        <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + 'person/noAvatar.png'
          }
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>{user.username}</span>
            <p>{user.desc}</p>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize="small" />
                <span>{`${user.city}, ${user.from}`}</span>
              </div>
            </div>
            {user.username !== currentUser.username && (
              <button onClick={handleClick}>
                {followed ? 'Unfollow' : 'Follow'}
              </button>
            )}
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            {friends.map((friend) => (
              <Link
                to={'/profile/' + friend.username}
                style={{ textDecoration: 'none' }}
              >
                <div className="rightbarFollowing">
                  <img
                    src={
                      friend.profilePicture
                        ? PF + friend.profilePicture
                        : PF + 'person/noAvatar.png'
                    }
                    alt=""
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">
                    {friend.username}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* TODO: - friends components
          <Friends user={user}>
         */}
        <Posts username={username} />
      </div>
    </div>
  );
};

export default Profile;
