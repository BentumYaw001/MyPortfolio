import { Contacts } from "./ProjectData";

function Contact({ id }) {
  return (
    <>
      <div className="Contacts" id={id}>
        <h2>
          <span># </span>Contacts <hr />
        </h2>
      </div>
      <div className="GetInTouch">
        Get In Touch !
        <div className="AllContacts">
          {Contacts.map((item, index) => {
            return (
              <>
                <div className="PersonalLines" key={index}>
                  <img src={item.icon} alt={item.name} />
                  <a href={item.address}>{item.name}</a>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="Contacts">
        <h2>
          <span># </span>FeedBack <hr />
        </h2>
      </div>

      <div className="FeedBack">
        <div className="Details">
          <input type="text" name="name" id="" placeholder="Name" required />
          <input type="text" name="email" id="" placeholder="Email" required />
        </div>
        <input type="text" name="title" id="" placeholder="Title" required />
        <textarea name="feedback" placeholder="Message..." required></textarea>
        <div className="Send">Send</div>
      </div>
    </>
  );
}

export default Contact;
