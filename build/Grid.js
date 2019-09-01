var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled from "styled-components";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: ", ";\n  margin: 0 ", ";\n   \n  @media (min-width: 600px) {\n    grid-template-columns: repeat(8, 1fr);\n  }\n  \n  @media (min-width: 840px) {\n    grid-template-columns: repeat(12, 1fr);\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: ", ";\n  margin: 0 ", ";\n   \n  @media (min-width: 600px) {\n    grid-template-columns: repeat(8, 1fr);\n  }\n  \n  @media (min-width: 840px) {\n    grid-template-columns: repeat(12, 1fr);\n  }\n"])), function (props) { return props.gutter; }, function (props) { return props.margins ? props.gutter : 0; });
Wrapper.displayName = "GridWrapper";
var Grid = function (props) {
    var children = props.children, margins = props.margins, gutter = props.gutter;
    return React.createElement(Wrapper, { margins: margins, gutter: gutter }, children);
};
Grid.defaultProps = {
    margins: true,
    gutter: "16px"
};
export default Grid;
var templateObject_1;
//# sourceMappingURL=Grid.js.map