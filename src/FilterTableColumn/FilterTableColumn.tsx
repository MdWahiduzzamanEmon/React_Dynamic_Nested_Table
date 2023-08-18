type FilterTableColumnProps = {
  isShowTableColumn?: any;
  setIsShowTableColumn?: any;
  setTableTitles: any;
  titles: any[];
  tableTitles: any[];
  handlePostData?: any;
};

function FilterTableColumn({
  isShowTableColumn,
  setIsShowTableColumn,
  setTableTitles,
  titles,
  tableTitles,
  handlePostData,
}: FilterTableColumnProps) {
  return (
    <div title="Filter Table Column">
      {titles?.map((title, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              id={index as any}
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
            <label htmlFor={index as any}>{title}</label>
          </div>
        );
      })}
    </div>
  );
}

export default FilterTableColumn;
