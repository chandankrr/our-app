import Friend from '../../assets/friend.png';
import Image from '../../assets/img.png';
import Map from '../../assets/map.png';
import './share.scss';

const Share = () => {
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${'john'}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: 'none' }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
