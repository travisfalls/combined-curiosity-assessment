import React from 'react';
import styled from 'styled-components';

// I separated out the header and the module header for SEO purposes. I wanted the large text to be the only thing in the h1 tag
// In hindsight, I would probably work on building a header component that accepted a header type like h1, h2, etc and then just had different styled components so that one header component could be used more widely

const ModuleHeader = ({text, textColor}) => {
    const Span = styled.span`
        color: ${textColor ? textColor : '#000000'};
    `;

    return(
        <Span>{text}</Span>
    )
}

export default ModuleHeader;