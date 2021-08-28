import styled from '@emotion/styled';
import { useEffect } from 'react';

const _Hello = styled.div({
    color: 'red',
    fontWeight: 'bold',
});

export const Hello = () => {
    useEffect(() => {
        console.log('hello world');
    }, []);
    return <_Hello>Hello World</_Hello>
};
