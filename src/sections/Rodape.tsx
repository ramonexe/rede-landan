import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: ${props => props.theme.colors.primary};
    padding: 20px;
    text-align: center;
    color: ${props => props.theme.colors.backgroundDark};
    width: 100%;
    bottom: 0;
`;

const FooterText = styled.p`
    margin: 0;
`;

const Rodape: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <FooterText>© {currentYear} Rede Landan. Todos os direitos reservados.</FooterText>
        </FooterContainer>
    );
};

export default Rodape;