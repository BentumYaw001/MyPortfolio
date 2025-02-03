import { Contacts } from "./ProjectData";
import Close from "/src/assets/design/close.svg";
import { useNavStore, useScrollStore } from "./Store";
import { NavData } from "./ProjectData";

function SideBar() {
  const closeMenu = useNavStore((state) => state.closeMenu);
  const { setActiveSection } = useScrollStore();

  return (
    <>
      <div className="SideBar" onClick={closeMenu}>
        <img src={Close} alt="" className="CloseBar" />
        <div className="SideMenu">
          {NavData.map((item) => {
            return (
              <p
                onClick={() => {
                  setActiveSection(item.active);
                  closeMenu;
                }}
              >
                <span>#</span>
                {item.name}
              </p>
            );
          })}
        </div>

        <div className="SideIcons">
          {Contacts.map((item) => {
            return (
              <>
                <a href={item.address}>
                  <img src={item.icon} alt={item.name} />
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SideBar;
