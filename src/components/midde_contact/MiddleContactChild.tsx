import MiddleContactData from "../../data/MiddleContact";
import MiddleContactCaption from "./_MiddleContactCaption";
export default function MiddleContactChild() {
  return (
    <div className="middle__contact__container">
      {MiddleContactData.map((el, index) => (
        <div key={index} className="middle_contact_data">
          <div className="middle_contact_icon">{el.icon}</div>
          <div className="middle_contact_content">
            <p className="middle_contact_title">{el.title}</p>
            <MiddleContactCaption el={el.value} index={index} />
          </div>
        </div>
      ))}
    </div>
  );
}
