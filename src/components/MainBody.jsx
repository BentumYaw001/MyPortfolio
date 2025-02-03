import Image1 from "/src/assets/design/Image-1.png";
import DortNine from "/src/assets/design/dots-nine.svg";

function MainBody({ id }) {
  return (
    <>
      <div className="MainBody" id={id}>
        <div className="SelfIntro">
          <div className="WhatIDo">
            <h3>
              I am a <span>web designer</span> and
              <span> frontend developer</span>
            </h3>
            <p>I craft reponsive websites where technology meets creativity</p>
            <h2>Contact ME</h2>
          </div>
          <div className="CurrentWork">
            <img src={Image1} alt="" className="Image1" />
            <img src={DortNine} alt="" className="DortNineImage" />
            <div className="CurrentStatus">
              <div className="PurpleBox"></div>
              <div className="Status">
                <p>Currently Working on</p>
                <h4>Portfolio</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="BlockQoute">
          <p className="qoute">
            The hardest choices require the strongest wills
          </p>
          <p className="Author">- Thanos</p>
        </div>
      </div>
    </>
  );
}

export default MainBody;
