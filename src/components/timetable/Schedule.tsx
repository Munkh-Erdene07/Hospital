import schedule from "../../data/schedule";
export default function Schedule() {
  return (
    <ul className="schedule">
      {schedule.map((el, index) => (
        <li key={index}>
          <span>{el.day}</span>
          <span>{el.time}</span>
        </li>
      ))}
    </ul>
  );
}
