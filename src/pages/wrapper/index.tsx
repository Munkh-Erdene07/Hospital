import Caruosel from "../../components/caruosel/Caruosel";
import TimeTable from "../../components/timetable";
import Container from "../../components/utils/Container";
import Service from "../../components/service/Service";
import Border from "../../components/utils/Border";
import MiddeContact from "../../components/midde_contact/MiddeContact";
import InfoServices from "../../components/infoServices";
export default function MainPage() {
  return (
    <main>
      <Caruosel />
      <MiddeContact />
      <Border />
      <Container>
        <TimeTable />
        <Service />
      </Container>

      <Border />
      <InfoServices />
      <div className="s"></div>
    </main>
  );
}
