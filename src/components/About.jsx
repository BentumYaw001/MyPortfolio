import { useDownloadStore } from "./Store";
import { AboutMessage } from "./ProjectData";

function About({ id }) {
  const downloadCV = useDownloadStore((state) => state.downloadCV);
  return (
    <>
      <div className="About" id={id}>
        <h2>
          <span># </span>About <hr />
        </h2>
        <div className="Intro">
          {AboutMessage.map((item) => {
            return <p>{item.message}</p>;
          })}
        </div>
        <div className="CV" onClick={downloadCV}>
          Download CV
        </div>
      </div>
    </>
  );
}

export default About;
