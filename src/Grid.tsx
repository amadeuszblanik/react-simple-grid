import React from "react";
import styled from "styled-components";

interface GridProps {
    children: JSX.Element | JSX.Element[];
    margins?: boolean;
    gutter?: string;
}

const Wrapper = styled.div<{
    margins?: boolean;
    gutter?: string;
}>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${props => props.gutter};
  margin: 0 ${props => props.margins ? props.gutter: 0};
   
  @media (min-width: 600px) {
    grid-template-columns: repeat(8, 1fr);
  }
  
  @media (min-width: 840px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

Wrapper.displayName = "GridWrapper"

const Grid: React.FunctionComponent<GridProps> = props => {
    const { children, margins, gutter } = props;

    return <Wrapper margins={margins} gutter={gutter}>{children}</Wrapper>
}

Grid.defaultProps = {
    margins: true,
    gutter: "16px"

}

export default Grid;