import './leftBar.scss';

const LeftBar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img src={PF + 'assets/1.png'} alt="friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/2.png'} alt="groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/3.png'} alt="market" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/4.png'} alt="watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/5.png'} alt="memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={PF + 'assets/6.png'} alt="events" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/7.png'} alt="gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/8.png'} alt="gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/9.png'} alt="videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/10.png'} alt="messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={PF + 'assets/13.png'} alt="fund" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/11.png'} alt="tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={PF + 'assets/12.png'} alt="courses" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
