import Data from "./ProjectData";

function Projects({ id }) {
  return (
    <>
      <div className="Projects" id={id}>
        <h2>
          <span># </span>Projects <hr />
        </h2>
        <div className="ProjectDesktop">
          {Data.map((item, index) => {
            return (
              <>
                <div className="ProjectPreview" key={index}>
                  <img src={item.image} alt="" className="ProjectImage" />

                  <p className="ProjectFrameworks">{item.frameWorks}</p>
                  <div className="ProjectName">{item.name}</div>
                  <div className="ProjectDescription">{item.description}</div>

                  <a href={item.liveSite} target="_blank">
                    Live
                  </a>
                  <a href={item.githubLink} target="_blank">
                    Github
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
