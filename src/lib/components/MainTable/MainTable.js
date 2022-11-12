import React from 'react';
import classes from './MianTable.module.css';
const MainTable = ({ align, titles, data, filter, tableHeaderDesign, ...rest }) => {

    return (
            <table className={classes.table} {...rest}>
                <thead style={tableHeaderDesign}>
                    <tr className={classes.tableHeaderCell}>
                        {/* {titles?.map((title, id) => (
							<th key={id}>{title}</th>
						))} */}
                        {filter
                            ? Object?.keys(data?.[0])?.map((key, i) => (
                                <th className="header-column" key={i}>
                                    {/* name with space before uppercase */}
                                    {key?.replace(/([A-Z])/g, " $1")?.trim()}
                                </th>
                            ))
                            : titles?.map((title, id) => <th key={id}>{title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data && data?.map((item, i) => (
                        <tr
                            key={i}
                            className={classes.tableCell}
                            style={{
                                backgroundColor: i % 2 === 0 ? "#fff" : "#f5f5f5",
                                textAlign: align ? align : "left",
                            }}
                        >
                            {Object?.keys(item)?.map((key, i) => (
                                <td key={i}>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
    );
};

export default MainTable;