import * as React from 'react';
import styled from '@emotion/styled'
import { Button } from '@mui/material';

export const CognitoButton = styled(Button)`
    margin-bottom: 1rem;
`;

// color: success, error, 

export const BasicButtons = ({
    color,
    label,
    size="large", //small, medium, large
    startIcon,
    endIcon,
    disabled,
    onClick
}) => {
    return (
        <Button 
            size={size}
            variant="contained"
            disabled={disabled}
            startIcon={startIcon}
            endIcon={endIcon}
            color={color}
            onClick={onClick}>
                {label}
        </Button>
    );
}