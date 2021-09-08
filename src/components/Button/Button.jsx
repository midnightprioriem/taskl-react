import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButton } from './Button.styles';

const Button = ({ color, to, children }) => {

    let history = useHistory();

    const handleClick = () => {
        history.push(to);
    }

    return (
        <StyledButton onClick={handleClick} color={color}>
            {children}
        </StyledButton>
    );
}

export default Button;