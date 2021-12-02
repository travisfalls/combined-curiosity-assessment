import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CTAButton from './CTAButton';
import styled from 'styled-components';

const Footer = ({bgColor}) => {
    const FooterContainer = styled.footer`
        background-color: ${bgColor ? bgColor : null};
    `;

    return(
        <FooterContainer className="jumbotron pb-5 pt-5">
            <Container>
                <Row>
                    <Col>
                        <h3 className="pb-3">Don't let a blank canvas ever intimidate you again. Let's get you painting today!</h3>
                        <CTAButton text="Try our free art lessons" url="https://www.masteroilpainting.com/free-art-training/" bgColor="#224290" textColor="#ffffff" />
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    )
}

export default Footer;