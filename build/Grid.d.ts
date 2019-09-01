import React from "react";
interface GridProps {
    children: JSX.Element | JSX.Element[];
    margins?: boolean;
    gutter?: string;
}
declare const Grid: React.FunctionComponent<GridProps>;
export default Grid;
