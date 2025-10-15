import style from "./index.module.css";

export function P({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={style.p} {...props}>
      {children}
    </p>
  );
}
