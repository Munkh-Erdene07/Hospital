import Caruosel from "../../components/caruosel/Caruosel";
import TimeTable from "../../components/timetable";
import Container from "../../components/utils/Container";
import Service from "../../components/service/Service";
export default function MainPage() {
  return (
    <main>
      <Caruosel />
      <Container>
        <TimeTable />
        <Service />
      </Container>
    </main>
  );
}
