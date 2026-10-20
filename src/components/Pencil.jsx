// Renders text, showing any [bracketed] bit as a pencilled "fill me in" note.
export default function Pencil({ children }) {
  if (typeof children !== 'string') return children;
  return children.split(/(\[[^\]]+\])/).map((part, i) =>
    part.startsWith('[') ? (
      <span key={i} className="pencil" title="Still to write">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );
}
