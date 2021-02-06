import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { theme } from '../../../helpers/variables';
import { FlexUnit } from '../../../helpers/mixins';
// import breakpoint from 'styled-components-breakpoint';

interface PageIndexProps {
    text?: string;
}

const StyledMain = styled.main`{
  width: 100%;
  height: 100%;
  ${FlexUnit(5, 32, 60, 'vw', 'font-size')};
  
  
}`
// ${breakpoint('desktop')`
//     font-size: 16px;
//   `}


const StyledSectionHello = styled.section`{
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${FlexUnit(30, 80, 300, 'vw', 'font-size')};
  text-transform: uppercase;
}`

const StyledO = styled.div`{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.variables.cBg};
  background-color: ${theme.variables.cText};
}`

const StyledHello = styled.div`{
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.variables.cText};
  background-color: ${theme.variables.cBg};
}`

const PageIndex: FunctionComponent<PageIndexProps> = ({
    text
}): JSX.Element => {



    return (
        <StyledMain className="main">
            <StyledSectionHello className="hello">
                <StyledO className="hello__preview">O</StyledO>
                <StyledHello className="hello__content">
                    Hello
                </StyledHello>
            </StyledSectionHello>
        </StyledMain>
    )
}

export default PageIndex;
