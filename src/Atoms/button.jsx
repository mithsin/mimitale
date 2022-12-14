import * as React from 'react';
import styled from '@emotion/styled'
import { Button } from '@mui/material';

export const CognitoButton = styled(Button)`
    margin-bottom: 1rem;
    ${props => {
        if (props.classcolor === 'green') {
            return `background-color: rgb(23, 255, 2);`
        }
        if (props.classcolor === 'yellow') {
            return `background-color: rgb(231, 231, 82);`
        }
        if (props.classcolor === 'red') {
            return `background-color: rgb(204, 0, 0);`
        }
    }}
`;

export const BasicButtonWrap = styled(Button)`
    margin: 1rem 0;
    padding: .5rem 0;
    ${props => {
        if (props.classcolor === 'green') {
            return `background-color: #389930;`
        }
        if (props.classcolor === 'yellow') {
            return `background-color: rgb(231, 231, 82);`
        }
        if (props.classcolor === 'red') {
            return `background-color: rgb(204, 0, 0);`
        }
    }}
`;

// color: success, error, 

export const BasicButtons = ({
    classcolor, //green, yellow, red
    color,
    label,
    size="large", //small, medium, large
    startIcon,
    endIcon,
    disabled,
    onClick
}) => {
    return (
        <BasicButtonWrap 
            size={size}
            variant="contained"
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            color={color}
            classcolor={classcolor}
            onClick={onClick}>
                {label}
        </BasicButtonWrap>
    );
}