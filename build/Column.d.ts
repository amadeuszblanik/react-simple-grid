import React from "react";
interface ColumnProps {
    children: JSX.Element | JSX.Element[] | string;
    mobile: number;
    tablet?: number;
    desktop?: number;
}
declare const Column: React.FunctionComponent<ColumnProps>;
export default Column;
