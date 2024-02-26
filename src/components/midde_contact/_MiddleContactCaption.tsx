export default function MiddleContactCaption({
  el,
  index,
}: {
  el: string;
  index: number;
}) {
  return (
    <div className="middle_contact_caption">
      {index === 0 ? (
        <a href={`tel:${el}`} className="middle_contact_href">
          {el}
        </a>
      ) : index === 1 ? (
        <a href={`mailto:${el}`} className="middle_contact_href">
          {el}
        </a>
      ) : (
        <span className="prapl">{el}</span>
      )}
    </div>
  );
}
