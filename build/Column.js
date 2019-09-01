var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled, { css } from "styled-components";
var Wrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  grid-column: span ", ";\n  \n  ", ";\n  \n  ", ";\n"], ["\n  display: block;\n  grid-column: span ", ";\n  \n  ",
    ";\n  \n  ",
    ";\n"])), function (props) { return props.small; }, function (props) { return props.medium && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @media (min-width: 600px) {\n      grid-column: span ", ";\n    }\n  "], ["\n    @media (min-width: 600px) {\n      grid-column: span ", ";\n    }\n  "])), function (props) { return props.medium; }); }, function (props) { return props.large && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    @media (min-width: 840px) {\n      grid-column: span ", ";\n    }\n  "], ["\n    @media (min-width: 840px) {\n      grid-column: span ", ";\n    }\n  "])), function (props) { return props.large; }); });
Wrapper.displayName = "ColumnWrapper";
var Column = function (props) {
    var children = props.children, mobile = props.mobile, tablet = props.tablet, desktop = props.desktop;
    return React.createElement(Wrapper, { small: mobile, medium: tablet, large: desktop }, children);
};
Column.defaultProps = {
    mobile: 4
};
export default Column;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Column.js.map