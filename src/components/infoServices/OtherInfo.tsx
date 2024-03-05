import { Link } from "react-router-dom";
export default function OtherInfo() {
  return (
    <div className="info-btn">
      <Link to={"/category/advice-news/news"}>Бусад мэдээ үзэх</Link>
    </div>
  );
}
