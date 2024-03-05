import InfoServiceGrid from "./InfoServiceGrid";
import Container from "../utils/Container";
import OtherInfo from "./OtherInfo";
export default function InfoServices() {
  return (
    <section className="info-services">
      <Container>
        <h3 className="info-caption">Мэдээ мэдээлэл</h3>
        <InfoServiceGrid />
        <OtherInfo />
      </Container>
    </section>
  );
}
