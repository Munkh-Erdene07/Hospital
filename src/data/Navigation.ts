const navigationDetail = [
  {
    value: "Бидний тухай",
    href: "/about",
  },
  {
    value: "Тусламж үйлчилгээ",
    detail: [
      { value: "Эмчилгээ үйлчилгээ", href: "/treatment-services" },
      { value: "Хэвтэн эмчлүүлэх", href: "/inpatient-treatment" },
    ],
  },
  { value: "Эмч мэргэжилтэн", href: "/doctor" },
  {
    value: "Мэдээ мэдээлэл",
    detail: [
      { value: "Мэдээлэл", href: "/information" },
      { value: "Эмчийн зөвлөгөө", href: "/doctor-advice" },
      { value: "Чанарын бодлого", href: "uality-policy" },
    ],
  },
  {
    value: "Түгээмэл асуултууд",
    detail: [
      { value: "Даатгал", href: "/Insurance" },
      {
        href: "/things-to-consider-when-giving-an-analysis",
        value: "Шинжилгээ өгөхөд анхаарах зүйл",
      },
    ],
  },
  {
    value: "Холбоо барих",
    detail: [
      { value: "Хаяг байршил", href: "/contact" },
      { value: "Хариу авах", href: "/answer" },
      { value: "Нээлтэй ажлын байр", href: "/jobs" },
    ],
  },
];
export default navigationDetail;
