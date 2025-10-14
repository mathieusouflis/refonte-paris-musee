import { cn } from "@/lib/utils";

export function Lead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  );
}
