import DortNine from "/src/assets/design/dots-nine.svg";
import DortSix from "/src/assets/design/dots-six.svg";
import { Skill } from "./ProjectData";

function Skills({ id }) {
  return (
    <>
      <div className="Skills">
        <h2>
          <span id={id}># </span>Skills <hr />
        </h2>
        <div className="Dots">
          <img src={DortNine} alt="" className="DotPrime" />
          <img src={DortSix} alt="" />
        </div>

        <div className="SkillDesktop">
          {Skill.map((item, index) => {
            return (
              <>
                <div className="SkillBox" key={index}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
