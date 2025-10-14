export function List({ elements }: { elements: React.ReactNode[] }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      {elements.map((element, idx) => (
        <li key={idx}>{element}</li>
      ))}
    </ul>
  );
}
