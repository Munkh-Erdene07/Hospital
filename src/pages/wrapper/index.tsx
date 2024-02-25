import Caruosel from "../../components/caruosel/Caruosel";
import Information from "../../components/information";
import TimeTable from "../../components/timetable";
import Container from "../../components/utils/Container";
export default function MainPage() {
  return (
    <main>
      <Caruosel />
      <Container>
        <TimeTable />
      </Container>
    </main>
  );
}
