import {
  faStethoscope,
  faHeartPulse,
  faStaffSnake,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faStethoscope, faHeartPulse, faStaffSnake, faStarOfLife);

const ServiceInformaton = [
  {
    icon: <FontAwesomeIcon icon={faStaffSnake} />,
    title: "Төгс, Шилдэг",
    caption: "Бид өндөр боловсрол, ур чадвартай мэргэжилтэнтэй.",
  },
  {
    icon: <FontAwesomeIcon icon={faStarOfLife} />,
    title: "Үйлчилгээ",
    caption: "Бид чанартай, түргэн шуурхай, хариуцлагатай үйлчилнэ.",
  },
  {
    icon: <FontAwesomeIcon icon={faHeartPulse} />,
    title: "Шинэ технологи",
    caption: "Бид шинэ технологи нэвтрүүлж, тэмүүлэлтэй хөгжинө.",
  },
  {
    icon: <FontAwesomeIcon icon={faStethoscope} />,
    title: "Энэрэл, Хүндэтгэл",
    caption: "Бид энэрэнгүй, хүндэтгэлтэй, ёс зүйтэй хандана.",
  },
];
export default ServiceInformaton;
