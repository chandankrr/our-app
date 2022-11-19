import PlaceIcon from '@mui/icons-material/Place';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Posts from '../../components/posts/Posts';
import './profile.scss';

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  console.log(username);

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
          src={user.coverPicter || PF + 'person/noCover.png'}
          alt=""
          className="cover"
        />
        <img
          src={user.profilePicture || PF + 'person/noAvatar.png'}
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
            <button>follow</button>
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
