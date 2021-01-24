import React from 'react';
import { styled } from 'flipper-plugin';
import chromeTheme from '../constants/chromeTheme';

let ButtonContainer = styled.div({
    backgroundColor: chromeTheme.dark.BASE_COLOR,
    margin: 5,
    borderRadius: 5,
    width: 100,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export default function Button({ label = '', onClick }) {
    return (
        <ButtonContainer onClick={onClick}>
            <span>{label}</span>
        </ButtonContainer>
    );
}
