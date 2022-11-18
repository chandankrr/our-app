import PlaceIcon from '@mui/icons-material/Place';
import Posts from '../../components/posts/Posts';
import './profile.scss';

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize="small" />
                <span>Patna, India</span>
              </div>
            </div>
            <button>follow</button>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
