import "./section-title.scss";

interface SectionTitleProps {
  text: string;
  emoji?: string;
}

export function SectionTitle({ text, emoji }: SectionTitleProps) {
  return (
    <div className="section-title">
      {/* <h3 className="section-title">{text}</h3> */}
      <h3>{text}</h3>
      {emoji && <span>{emoji}</span>}
    </div>
  );
}
