// import "src/MainTable/MainTable.css";
//@ts-ignore

type MainTableProps = {
  align?: "left" | "right" | "center";
  titles?: string[];
  data: any[];
  filter?: boolean;
  tableHeaderDesign?: any;
  style?: any;
  dense?: string;
};

const MainTable = ({
  align,
  titles,
  data,
  filter,
  tableHeaderDesign,
  style,
  dense,
  ...rest
}: MainTableProps) => {
  return (
    <section
      style={{
        //fit table width with window width
        width: "100%",
        //   maxWidth: width > 768 ? "calc(100vw - 20px)" : "calc(100vw - 83px)",
        overflowX: "auto",
      }}
    >
      <table
        {...rest}
        style={{
          ...style,
          borderSpacing: "0",
          borderCollapse: "collapse",
          ...(style?.width
            ? { width: style?.width }
            : {
                width: "100%",
              }),
          ...(style?.fontSize
            ? { fontSize: style?.fontSize }
            : {
                fontSize: "0.875rem",
              }),
        }}
      >
        <thead
          style={{
            ...tableHeaderDesign,
            ...(tableHeaderDesign?.backgroundColor
              ? { backgroundColor: tableHeaderDesign?.backgroundColor }
              : {
                  backgroundColor: "#111936",
                }),

            ...(tableHeaderDesign?.color
              ? { color: tableHeaderDesign?.color }
              : {
                  color: "#fff",
                }),
          }}
        >
          <tr>
            {/* {titles?.map((title, id) => (
                          <th key={id}>{title}</th>
                      ))} */}
            {filter
              ? Object?.keys(data?.[0])?.map((key, i) => (
                  <th
                    key={i}
                    style={{
                      padding: dense ? dense : "0.75rem",
                    }}
                  >
                    {/* {textFormatter({ key })} */}
                    {key
                      ?.replace?.(/_/g, " ")
                      ?.replace?.(/\w\S*/g, (w) =>
                        w?.replace(/^\w/, (c) => c?.toUpperCase())
                      )
                      ?.replace(/([a-z])([A-Z])/g, "$1 $2")
                      ?.trim()}
                  </th>
                ))
              : titles?.map((title, id) => (
                  <th
                    style={{
                      padding: dense ? dense : "0.75rem",
                    }}
                    key={id}
                  >
                    {title}
                  </th>
                ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((item, i) => (
              <tr
                key={i}
                // className={classes.tr}
                style={{
                  backgroundColor: i % 2 === 0 ? "#fff" : "#f5f5f5",
                  textAlign: align ? align : "left",
                }}
              >
                {Object?.keys(item)?.map((key, i) => (
                  <td
                    style={{
                      padding: dense ? dense : "0.75rem",
                      border: "0.0625rem solid rgba(126, 121, 121, 0.175)",
                    }}
                    key={i}
                  >
                    {item[key] ? item[key] : "N/A"}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default MainTable;
