import Time from "./Time";
import Schedule from "./Schedule";
import ReplyBtn from "./ReplyBtn";
export default function TimeTable() {
  return (
    <section className="time-table">
      <Time title="Хэрэглэгч">
        <ReplyBtn />
      </Time>
      <Time title="Тавтай морил"></Time>
      <Time title="Цагын хуваарь">
        <Schedule />
      </Time>
    </section>
  );
}
