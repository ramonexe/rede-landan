import React from 'react';
import styled from 'styled-components';
import Botao from './Botao';

const Cabecalho: React.FC = () => {
    return (
        <Header>
            <div style={{ marginRight: '20px', marginTop: '20px' }}>
            <Botao>Contato</Botao>
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
`;

export default Cabecalho;