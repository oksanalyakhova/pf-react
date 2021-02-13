import React, {FunctionComponent, useRef} from 'react';
import styled from 'styled-components';

interface SplittingTextProps {
    text: string;
}

const StyledLetters = styled.span`{
  display: inline-block;
}`

const StyledLetter = styled.span`{
  display: inline-block;
}`

const SplittingText: FunctionComponent<SplittingTextProps> = ({
    text,
}): JSX.Element => {
    const letterWrap = useRef<HTMLElement>(null);

    return (
        <StyledLetters aria-label={text} ref={letterWrap}>
            {text.split('').map(function(char, index){
                return <StyledLetter className="letter"
                    aria-hidden="true"
                    key={index}>{char}
                </StyledLetter>;
            })}
        </StyledLetters>
    );
}

export default SplittingText;
