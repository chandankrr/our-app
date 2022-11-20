import Friends from '../../assets/1.png';
import Messages from '../../assets/10.png';
import Tutorials from '../../assets/11.png';
import Courses from '../../assets/12.png';
import Fund from '../../assets/13.png';
import Groups from '../../assets/2.png';
import Market from '../../assets/3.png';
import Watch from '../../assets/4.png';
import Memories from '../../assets/5.png';
import Events from '../../assets/6.png';
import Gaming from '../../assets/7.png';
import Gallery from '../../assets/8.png';
import Videos from '../../assets/9.png';
import './leftBar.scss';

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={Friends} alt="friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="market" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="events" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="fund" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="courses" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
