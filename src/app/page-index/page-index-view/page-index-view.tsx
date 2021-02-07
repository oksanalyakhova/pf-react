import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../helpers/variables';
import { FlexUnit } from '../../../helpers/mixins';
// import breakpoint from 'styled-components-breakpoint';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

interface PageIndexProps {
    text?: string;
}

const StyledMain = styled.main`{
  width: 100%;
  height: 100%;;
  
  
}`
// ${breakpoint('desktop')`
//     font-size: 16px;
//   `}


const StyledSection = styled.section`{
  position: relative;
  width: 100%;
  height: 100vh;
  ${FlexUnit(30, 80, 300, 'vw', 'font-size')};
  text-transform: uppercase;
}`

const StyledO = styled.div`{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.variables.cBg};
  background-color: ${theme.variables.cText};
}`

const StyledHello = styled.div`{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.variables.cText};
  background-color: ${theme.variables.cBg};
}`

const StyledEnd = styled.div`{
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.variables.cText};
  background-color: ${theme.variables.cBg};
}`

const PageIndex: FunctionComponent<PageIndexProps> = ({
    text
}): JSX.Element => {
    const refSection = useRef<HTMLElement>(null);
    const refHello = useRef<HTMLDivElement>(null);
    // const [offWidth, setOffWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        if (refSection.current && refHello.current) {
            // setOffWidth(refSection.current.offsetWidth);

            const action = gsap.timeline({
                scrollTrigger: {
                    trigger: refSection.current,
                    pin: true,
                    scrub: 0.3,
                    start: "top top",
                    end: "+=3000"
                }
            })
                .to(refHello.current, {xPercent: -100, duration:2, ease: "none"})
                .to({},{duration: 0.5})
        }

    })

    return (
        <StyledMain className="main">
            {/*<StyledSection>*/}
            {/*    <StyledO className="hello__preview">*/}
            {/*        <div>O</div>*/}
            {/*    </StyledO>*/}
            {/*</StyledSection>*/}
            <StyledSection ref={refSection} className="hello">
                <StyledO className="hello__preview">
                    <div>O</div>
                </StyledO>
                <StyledHello ref={refHello} className="hello__content">
                    <div>Hello</div>
                </StyledHello>
            </StyledSection>
            {/*<StyledSection>*/}
            {/*    <StyledEnd className="hello__content">*/}
            {/*        <div>Hello</div>*/}
            {/*    </StyledEnd>*/}
            {/*</StyledSection>*/}
        </StyledMain>
    )
}

export default PageIndex;
