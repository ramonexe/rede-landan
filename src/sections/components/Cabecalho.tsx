import React from 'react';
import styled from 'styled-components';
import Botao from './Botao';

const Cabecalho: React.FC = () => {
    const handleMandarMensagem = () => {
        const whatsappNumero = "5511942957971";
        const textoMensagem = encodeURIComponent("Olá, gostaria de mais informações sobre os serviços da Rede Landan.");
        const whatsappLink = `https://wa.me/${whatsappNumero}?text=${textoMensagem}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <Header>
            <div style={{ marginRight: '20px', marginTop: '20px' }}>
            <Botao onClick={handleMandarMensagem}>Contato</Botao>
            </div>
        </Header>
    );
};

const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: transparent;
    z-index: 1000;
`;

export default Cabecalho;