import React from 'react';
import Header from './Header';
import CTAButton from './CTAButton';
import ModuleHeader from './ModuleHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

// I used Bootstrap as an easy way to lay out the design. I don't necessarily love mixing the use of Bootstrap classes and React-Bootstrap components. I'd have to do some further digging to see if there is a better way of working with styled components and React-Bootstrap components

// I think there could be more flexibility in this component if someone wanted to maybe overlay a color over a picture or wanted to add a gradient as the background. Not necessarily difficult, just didn't have the time to implement it.

const Hero = ({bgColor, bgImage}) => {
    const HeroContainer = styled.div`
        background-color: ${bgColor ? bgColor : null};
        background-image: ${bgImage ? `url(\"${bgImage}\");` : null};
        background-size: cover;
    `;

    return(
        <HeroContainer className="jumbotron">
            <Container className="pt-5 pb-5">
                <Row>
                    <Col>
                        <ModuleHeader 
                            text="Master Oil Painting" 
                            textColor="#ffffff"
                        />
                        <Header 
                            text="Find joy in your artistic journey."
                            textColor="#ffffff"
                        />
                        <CTAButton 
                            url="https://www.masteroilpainting.com/free-art-training/" 
                            text="Try our free art lessons" 
                            bgColor="#ff7645"
                        />
                    </Col>
                </Row>
            </Container>
        </HeroContainer>
    )
}

export default Hero;