import { Contacts } from "./ProjectData";

function Footer() {
  return (
    <>
      <div className="Footer">
        <hr />
      </div>
      <div className="FooterIcons">
        {Contacts.map((item, index) => {
          return (
            <>
              <div className="CopyRight" key={index}>
                <a href={item.address} target="_blank">
                  <img src={item.icon} alt={item.name} />
                </a>
              </div>
            </>
          );
        })}
      </div>
      <p className="CopyRight">Email: richmondbentum2020@gmail.com</p>
      <h2 className="CopyRight">Frontend Engineer</h2>
      <p className="CopyRight">Copyright 2025, Made by Bentum</p>
    </>
  );
}

export default Footer;
