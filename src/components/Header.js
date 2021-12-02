import React from 'react';
import styled from 'styled-components';

// I separated out the header and the module header for SEO purposes. I wanted the large text to be the only thing in the h1 tag
// In hindsight, I would probably work on building a header component that accepted a header type like h1, h2, etc and then just had different styled components so that one header component could be used more widely

const Header = ({text, textColor}) => {
    const H1 = styled.h1`
        font-size: 80px;
        font-Family: 'Alice',Georgia,"Times New Roman",serif;
        color: ${textColor ? textColor : '#000000'}
    `;

    return(
        <H1 className="pb-5">{text}</H1>
    )
}

export default Header;