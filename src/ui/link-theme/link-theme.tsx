import React, { FunctionComponent, useState } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import styled from 'styled-components';

interface LinkThemeProps {
    text?: string;
    href?: string;
}

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  width: fit-content;
  transition: color .7s;
  &.is-hovered {
    &::before {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  &::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    opacity: 0;
    background-color: #000;
    transform: translate3d(0,5px,0);
    transition: transform .45s,opacity .45s;
  }
`

const LinkTheme: FunctionComponent<LinkThemeProps> = ({
    text,
    href
}): JSX.Element => {
    const [inHover, setHover] = useState(false);

    const classes = classNames('link link-variables', {
        'is-hovered': inHover,
    })
    return (
        <StyledLink to={{pathname: href}} data-cursor
                    className={classes}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
            {text}
        </StyledLink>
    );
}
//
// const LinkTheme = ({ text, href }: LinkThemeProps) => {
//     const [inHover, setHover] = useState(false);
//
//     const classes = classNames('link link-variables', {
//         'is-hovered': inHover,
//     })
//     return (
//         <StyledLink to={{pathname: href}} data-cursor
//               className={classes}
//               onMouseEnter={() => setHover(true)}
//               onMouseLeave={() => setHover(false)}>
//             {text}
//         </StyledLink>
//     );
// }

export default LinkTheme;
