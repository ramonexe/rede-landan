import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<ButtonProps>`
    background-color: ${(props) => props.theme.colors.primary};
    color: black;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 15px;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryHover};
    }
`;

const Botao: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Botao;