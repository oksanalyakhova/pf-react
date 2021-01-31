// fluid typography
// used https://nilsb.org/2019-02-12-sass-mixins-in-styled-components/
export const FlexUnit = (
    amount: number,
    min: number,
    max: number,
    unit: string,
    prop: string
) => {
    const minBreakpoint = (min / amount) * 100
    const maxBreakpoint = max ? (max / amount) * 100 : false
    const dimension = unit === 'vw' ? 'width' : 'height'

    return `
    @media (max-${dimension}: ${minBreakpoint}px) {
        ${prop}: ${min}px;
    }

    ${
        max
            ? `
                @media (min-${dimension}: ${maxBreakpoint}px) {
                    ${prop}: ${max}px;
                }
            `
            : ''
    }

    ${prop}: ${amount}${unit}
  `
}

// others helpers
export const Pseudo = (
    top: number,
    left: number,
) => {
    return `
        position: relative;
        &::before, &::after {
            content: '';
            position: absolute;
            top: ${top};
            left: ${left};
        }
    `
}

export const CoverDiv = () => {
    return `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `
}

export const Cover = () => {
    return `
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
    `
}

export const BgImage = (
    image: string,
) => {
    return `
        background-image: url(${image});
    `
}

export const BgSize = (
    width: string,
    height: string
) => {
    return `
        background-size: ${width} ${height};
    `
}

export const Center = (
    axis: string,
    h: 'h',
    v: 'v'
) => {
    return `
    ${
        axis === h
            ? `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            `
            : axis === v ? `
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            `
            : `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                
            `
        }
    `
}

export const Font = (
    alias: string,
    name: string,
    weight: any,
) => {
    return `
        @font-face
            font-family: ${alias};
            src: url("./assets/fonts/${name}.woff2") format("woff2"), url("./assets/fonts/${name}.woff") format("woff");
            font-weight: ${weight};
            font-style: normal;
            font-display: swap;
    `
}

export const FS = (
    sizeValue?: number,
) => {
    return `
    ${
        sizeValue
            ?
                `font-size: ${sizeValue}px;
                font-size: ${sizeValue} / 10 + rem;`
            :   `font-size: 16px;
                font-size: 16 / 10 + rem;`
        }   
    `
}

export const F = (
    fs: string,
    lh: string,
    ls: string,
    tt: string,
) => {
    return `
        font-size: ${fs};
        line-height: ${lh};
        letter-spacing: ${ls};
        text-transform: ${tt};
    `
}

export const Trans = (
    what?: string,
    dur?: string,
    easing?: string,
) => {
    return `
    ${
        what
            ? 
                `transition: ${what} ${dur} ${easing};`
            :   `transition: all .35s ease;`
        }
        
    `
}

export const Smooth = () => {
    return `
        -webkit-overflow-scrolling: touch;
    `
}

export const SmoothFont = () => {
    return `
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscaleh;
    `
}
