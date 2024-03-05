export default function InfoServiceImg({
  img,
  index,
}: {
  img: string;
  index: number;
}) {
  return (
    <div className="info-services-img">
      <div className="opacity wfull"></div>
      <div className="lesson">Сургалт, Судалгаа</div>
      <img src={img} alt={`info-service-${index}`} className="wfull" />
    </div>
  );
}
