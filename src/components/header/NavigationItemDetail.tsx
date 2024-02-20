import { Link } from "react-router-dom";
import Icon from "../utils/Icons";
interface DetailItem {
  value: string;
  href: string;
}

interface Props {
  detail: DetailItem[];
}

export default function NavigationItemDetail({ detail }: Props) {
  const icon = Icon();
  return (
    <ul className="navigationDetails">
      {detail.map((item, itemIndex) => (
        <li key={itemIndex} className="w12">
          <icon.IoWater className="water" />
          <Link to={item.href}>{item.value}</Link>
        </li>
      ))}
    </ul>
  );
}
