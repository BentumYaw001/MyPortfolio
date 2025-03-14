import Image1 from "/src/assets/design/Image-1.png";
import DortNine from "/src/assets/design/dots-nine.svg";

function MainBody({ id }) {
  return (
    <>
      <div className="MainBody" id={id}>
        <div className="SelfIntro">
          <div className="WhatIDo">
            <h3>
              I am a <span>software engineer</span>
            </h3>
            <p>
              I craft reponsive websites using the latest technology on the
              market.I love to stay up to date with technological trends
            </p>
            <a href="https://t.me/OohYeesRi" target="_blank">
              Contact ME
            </a>
          </div>
          <div className="CurrentWork">
            {/* <img src={Image1} alt="" className="Image1" /> */}
            {/* <img src={DortNine} alt="" className="DortNineImage" /> */}
            <div className="CurrentStatus">
              <div className="PurpleBox"></div>
              <div className="Status">
                <p>Currently Available for hire</p>
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
