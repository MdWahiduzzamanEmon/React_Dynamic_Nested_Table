//Author Name: Md Wahiduzzaman Emon
//Author GitHub URL: https://github.com/MdWahiduzzamanEmon
//Author LinkedIn URL: https://www.linkedin.com/in/md-wahiduzzaman-emon-5b1b3b1b3/

import React from "react";
import classes from "./MianTable.module.css";
import textFormatter from "text-formatter-js";
const MainTable = ({
  align,
  titles,
  data,
  filter,
  tableHeaderDesign,
  style,
  ...rest
}) => {
  return (
    <table className={classes.table} {...rest} style={style}>
      <thead style={tableHeaderDesign}>
        <tr className={classes.tableHeaderCell}>
          {/* {titles?.map((title, id) => (
							<th key={id}>{title}</th>
						))} */}
          {filter
            ? Object?.keys(data?.[0])?.map((key, i) => (
                <th className="header-column" key={i}>
                  {/* name with space before uppercase */}
                  {/* {key?.replace(/([A-Z])/g, " $1")?.trim()} */}
                  {textFormatter(key)}
                </th>
              ))
            : titles?.map((title, id) => <th key={id}>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((item, i) => (
            <tr
              key={i}
              className={classes.tableCell}
              style={{
                backgroundColor: i % 2 === 0 ? "#fff" : "#f5f5f5",
                textAlign: align ? align : "left",
              }}
            >
              {Object?.keys(item)?.map((key, i) => (
                <td key={i}>{item[key] ? item[key] : "N/A"}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default MainTable;
