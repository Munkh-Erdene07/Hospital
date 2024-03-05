import infoServicesData from "../../data/InfoServices";
import InfoServiceImg from "./InfoServiceImg";
export default function InfoServiceGrid() {
  return (
    <div className="info-services-parrent">
      {infoServicesData.map((el, index) => (
        <div key={index} className="info-services-child wfull">
          <InfoServiceImg index={index} img={el.img} />
          <div className="info-services-content wfull">
            <p>{el.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
