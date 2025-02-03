import Logo from "/src/assets/design/Logo.svg";
import { useNavStore, useScrollStore } from "./Store";
import { NavData } from "./ProjectData";

function NavBar() {
  const openMenu = useNavStore((state) => state.openMenu);
  const { activeSection, setActiveSection } = useScrollStore();

  return (
    <>
      <div className="NavBar">
        <div className="Logo">
          <img src={Logo} alt="" />
          <h2>Bentum ...</h2>
        </div>
        <div className="NavMenu">
          {NavData.map((item) => {
            return (
              <p
                className={`nav-link ${
                  activeSection === item.active ? "Active" : ""
                }`}
                onClick={() => {
                  setActiveSection(item.active);
                }}
              >
                <span>#</span>
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NavBar;
