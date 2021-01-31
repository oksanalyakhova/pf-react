import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FlexUnit } from '../../../helpers/mixins';

interface PageIndexProps {
    text?: string;
}

const StyledMain = styled.main`{
  width: 100%;
  height: 100%;
  ${FlexUnit(5, 32, 60, 'vw', 'font-size')}
}`

const StyledSectionHello = styled.section`{
  width: 100vw;
  height: 100vh;
}`

const StyledO = styled.div`{
  
}`

const Hello = styled.div`{
  
}`

const PageIndex: FunctionComponent<PageIndexProps> = ({
    text
}): JSX.Element => {
    return (
        <StyledMain className="main">
            <StyledSectionHello className="hello">
                <StyledO className="hello__preview">O</StyledO>
                <Hello className="hello__content">
                    Hello
                </Hello>
            </StyledSectionHello>
        </StyledMain>
    )
}

export default PageIndex;
