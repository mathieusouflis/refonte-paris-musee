import style from "./index.module.css";

export function H2({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={style.h2} {...props}>
      {children}
    </h2>
  );
}
