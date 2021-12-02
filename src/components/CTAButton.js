import React from 'react';
import styled from 'styled-components';

const CTAButton = ({url, text, bgColor, textColor}) => {
    const Button = styled.a`
        background-color: ${bgColor ? bgColor : '#000000'};
        color: ${textColor ? textColor : '#ffffff'};
        padding: 20px;
        border-radius: .25rem;
        text-decoration: none;
        text-transform: uppercase;
    `;
    return(
        <Button href={url} className="mt-5">{text}</Button>
    )
}

export default CTAButton;