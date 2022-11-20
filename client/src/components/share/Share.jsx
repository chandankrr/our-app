import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import Friend from '../../assets/friend.png';
import Image from '../../assets/img.png';
import Map from '../../assets/map.png';
import { AuthContext } from '../../context/AuthContext';
import './share.scss';

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();

  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post('/posts', newPost);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt=""
          />
          <input
            type="text"
            placeholder={`What's on your mind ${user.username}?`}
            ref={desc}
          />
        </div>
        <hr />
        <form className="bottom" onSubmit={submitHandler}>
          <div className="left">
            <input
              type="file"
              id="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
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
            <button type="submit">Share</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
