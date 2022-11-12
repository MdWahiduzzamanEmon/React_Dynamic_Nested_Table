import React from 'react';

const FilterTableColumn = ({ isShowTableColumn, setIsShowTableColumn, setTableTitles, titles, tableTitles, handlePostData }) => {
    return (
            <div title="Filter Table Column" >
                    {titles?.map((title, index) => {
                        return (
                            <div
                                key={index}
                            >

                                <input
                                    type="checkbox"
                                    id={index}
                                    name={title}
                                    defaultChecked={isShowTableColumn?.[title?.replace(/\s/g, "")]}
                                    onChange={(e) => {
                                        const replaceSpaceInTitle = title?.replace(/\s/g, "");
                                        if (e.target.checked) {
                                            setIsShowTableColumn({
                                                ...isShowTableColumn,
                                                [replaceSpaceInTitle]: true,
                                            });

                                            handlePostData({
                                                ...isShowTableColumn,
                                                [replaceSpaceInTitle]: true,

                                            });
                                            setTableTitles([...tableTitles, title]);
                                        } else {
                                            setIsShowTableColumn({
                                                ...isShowTableColumn,
                                                [replaceSpaceInTitle]: false,
                                            });

                                            handlePostData({
                                                ...isShowTableColumn,
                                                [replaceSpaceInTitle]: false,
                                            });
                                            setTableTitles(tableTitles?.filter((item) => item !== title));
                                        }
                                    }}
                                />
                                <label htmlFor={index}>{title}</label>
                            </div>
                        );
                    }
                    )}
            </div>
    );
};

export default FilterTableColumn;