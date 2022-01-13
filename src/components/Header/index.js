import React from 'react';

import { Header, Content, Text } from './Header.styles';

const HeroImage = ({ image, title, text }) => (
    <Header image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Header>
)

export default HeroImage;