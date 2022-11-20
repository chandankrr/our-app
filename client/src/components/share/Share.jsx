import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { useContext, useRef, useState } from 'react';
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
      window.location.reload();
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
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon
              className="shareCancelImg"
              onClick={() => setFile(null)}
            />
          </div>
        )}
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
                <img src={PF + 'assets/img.png'} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={PF + 'assets/map.png'} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={PF + 'assets/friend.png'} alt="" />
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
