import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {theme} from '../../../../helpers/variables';
import {gsap} from 'gsap';
import * as PIXI from 'pixi.js';

import hello from '../../../../assets/img/hello.png';
import displacement from '../../../../assets/img/displacement.jpg';

const StyledO = styled.div`{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.variables.cBg};
  background-color: ${theme.variables.cText};
}`

const StyledCanvasWrap = styled.div`{
  width: 60vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
}`

const BlockPreview = (): JSX.Element => {
    const refO = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({paused: true});

        if (refO.current) {
            const w = 954.94;
            const h = 345;

            const application = new PIXI.Application({
                clearBeforeRender: true,
                width: w,
                height: h,
                backgroundColor: 0x222222,
            });
            refO.current?.appendChild(application.view);
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

            displacementFilter.scale.x = 40;
            displacementFilter.scale.y = 10;

            application.ticker.add(() => {
                displacementSprite.x++;
                if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }
            });

            tl.to(displacementFilter.scale,{
                duration: 4,
                x: 40,
                y: 10,
                ease: "none"
            });

            gsap.to(displacementFilter.scale,{
                x: -500,
                y: -500,
                ease: "none",
                onComplete: () => {
                    tl.play();
                }
            });

            return () => {
                application.destroy(true);
            };
        }

    }, [])

    return (
        <StyledO className="hello__preview">
            <StyledCanvasWrap ref={refO}/>
        </StyledO>
    )
}

export default BlockPreview;
