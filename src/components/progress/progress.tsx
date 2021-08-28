import styled from '@emotion/styled';
import { useProgressValue } from './state';

const _Progress = styled.ul((props: { bgColor: string }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    border: `2px solid ${props.bgColor}`,
    padding: 2,
    height: 25,
    width: 500,

    li: {
        listStyle: 'none',
        height: '100%',
        width: 10,
        backgroundColor: props.bgColor,
    }
}));

type ProgressProps = {
    bgColor: string;
};

export const Progress = (props: ProgressProps) => {
    console.log('Render Progress');
    const length = useProgressValue();
    return (
        <_Progress bgColor={props.bgColor}>
            {
                [...Array(length)].map((_, i) => {
                    return <li key={i}></li>;
                })
            }
        </_Progress>
    );
} 