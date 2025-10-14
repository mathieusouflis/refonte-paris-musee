import { cn } from "@/lib/utils";

export function List({
  elements,
  className,
}: {
  elements: React.ReactNode[];
  className?: string;
}) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {elements.map((element, idx) => (
        <li key={idx}>{element}</li>
      ))}
    </ul>
  );
}
