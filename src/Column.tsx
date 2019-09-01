import React from "react";
import styled, { css } from "styled-components";

interface ColumnProps {
    children: JSX.Element | JSX.Element[];
    mobile: number;
    tablet?: number;
    desktop?: number;
}

const Wrapper = styled.div<{
    small: number;
    medium?: number;
    mobile?: number;
}>`
  display: block;
  grid-column: span ${ props => props.small};
  
  ${props => props.medium && css`
    @media (min-width: 600px) {
      grid-column: span ${props => props.medium};
    }
  `};
  
  ${props => props.large && css`
    @media (min-width: 840px) {
      grid-column: span ${props => props.large};
    }
  `};
`

Wrapper.displayName = "ColumnWrapper"

const Column: React.FunctionComponent<ColumnProps> = props => {
    const { children, mobile, tablet, desktop } = props;

    return <Wrapper small={mobile} medium={tablet} large={desktop}>{children}</Wrapper>
}

Column.defaultProps = {
    mobile: 4
}

export default Column;