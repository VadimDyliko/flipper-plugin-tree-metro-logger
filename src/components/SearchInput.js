import React from 'react';
import { styled } from 'flipper-plugin';
import chromeTheme from '../constants/chromeTheme';

let Input = styled.input({
    backgroundColor: chromeTheme.dark.BASE_COLOR,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
    width: '100%',
    height: 30,
});

export default function SearchInput({ onChange, placeholder }) {
    return <Input onChange={onChange} placeholder={placeholder} />;
}
