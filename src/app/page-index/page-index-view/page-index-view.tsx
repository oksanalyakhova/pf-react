import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {theme} from '../../../helpers/variables';
import breakpoint from 'styled-components-breakpoint';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as PIXI from 'pixi.js';

import hello from '../../../assets/img/hello.png';
import displacement from '../../../assets/img/displacement.jpg';

const StyledMain = styled.main`{
  width: 100%;
  height: 100%;
  background-color: ${theme.variables.cText};
  overflow: hidden;
}`

const StyledSection = styled.div`{
  position: relative;
  width: 100%;
  height: 100vh;
  font-size: 30vw;
  text-transform: uppercase;
  ${breakpoint('desktop')`
        font-size: 25vw;
    `}
}`

const StyledO = styled.div`{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}`

const StyledCanvasWrap = styled.div`{
  margin-left: .25vw;
  width: 95.49375vw;
  height: 34.375vw;
  display: flex;
  justify-content: center;
  align-items: center;
    ${breakpoint('desktop')`
        width: 79.5782vw;
        height: 28.7239vw;
    `}
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
  color: ${theme.variables.cBg};
}`

const StyledEnd = styled.div`{
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.variables.cText};
}`

const PageIndex = ():JSX.Element => {
    const refMain = useRef<HTMLElement>(null);
    const refSectionFirst = useRef<HTMLDivElement>(null);
    const refSectionSecond = useRef<HTMLDivElement>(null);
    const refCanvas = useRef<HTMLDivElement>(null);
    const refHello = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        if (refMain.current
            && refSectionFirst.current
            && refSectionSecond.current
            && refCanvas.current
            && refHello.current) {

            // pixi
            const w = 954.94;
            const h = 345;

            const application = new PIXI.Application({
                clearBeforeRender: true,
                width: w,
                height: h,
                backgroundColor: 0x222222,
            });
            refCanvas.current?.appendChild(application.view);
            application.stage.interactive = true;

            application.renderer.resize(w, h)
            application.render()

            const container = new PIXI.Container();
            application.stage.addChild(container);

            const helloImg = PIXI.Sprite.from(hello);
            container.addChild(helloImg);
            helloImg.x = 0;
            helloImg.y = 0;

            const displacementSprite = PIXI.Sprite.from(displacement);
            displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
            const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
            displacementFilter.padding = 10;
            displacementSprite.position = helloImg.position;

            application.stage.addChild(displacementSprite);

            helloImg.filters = [displacementFilter];

            application.ticker.add(() => {
                displacementSprite.x++;
                if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }
            });

            // gsap
            gsap.set(displacementFilter.scale,{x: 40,y: 10});

            gsap.to(displacementFilter.scale,{
                x: 100,
                y: 200,
                duration: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: refSectionFirst.current,
                    pin: true,
                    scrub: 0.3,
                    start: "top top",
                    end: "+=3000"
                }
            });

            gsap.to(refHello.current, {
                xPercent: -100,
                duration: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: refSectionFirst.current,
                    pin: true,
                    scrub: 0.3,
                    start: "top top",
                    end: "+=3000"
                }
            })

            return () => {
                application.destroy(true);
            };
        }
    })

    return (
        <StyledMain ref={refMain}>
            <StyledSection ref={refSectionFirst}>
                <StyledO>
                    <StyledCanvasWrap ref={refCanvas}/>
                </StyledO>
                <StyledHello ref={refHello}>
                    <div>Hello</div>
                </StyledHello>
            </StyledSection>
            <StyledSection ref={refSectionSecond}>
                <StyledEnd>
                    <div />
                </StyledEnd>
            </StyledSection>
        </StyledMain>
    )
}

export default PageIndex;
