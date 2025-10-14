interface TableColumn {
  header: string;
  align?: "left" | "center" | "right";
}

interface TableRow {
  [key: string]: string | number;
}

interface TableTypographyProps {
  columns: TableColumn[];
  data: TableRow[];
  className?: string;
}

export function TableTypography({
  columns,
  data,
  className = "",
}: TableTypographyProps) {
  const getAlignClass = (align?: "left" | "center" | "right") => {
    if (align === "center") return "text-center";
    if (align === "right") return "text-right";
    return "text-left";
  };

  return (
    <div className={`my-6 w-full overflow-y-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`border px-4 py-2 font-bold ${getAlignClass(column.align)} [&[align=center]]:text-center [&[align=right]]:text-right`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-muted m-0 border-t p-0">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`border px-4 py-2 ${getAlignClass(column.align)} [&[align=center]]:text-center [&[align=right]]:text-right`}
                >
                  {row[column.header] || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
