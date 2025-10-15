import style from "./index.module.css";

export function Display({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={style.display} {...props}>
      {children}
    </h1>
  );
}
