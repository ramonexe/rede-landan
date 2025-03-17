import React from 'react';
import styled from 'styled-components';
import Botao from './Botao';

interface CardPrecoProps {
    nomePlano: string;
    preco: string;
    tipoPlano: string;
    uploadMbps: number;
    downloadMbps: number;
    descricao: string;
}

const CardContainer = styled.div`
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.colors.text};
    border-radius: 8px;
    padding: 16px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PlanoHeader = styled.div`
    text-align: center;
`;

const NomePlano = styled.h2`
    margin: 0;
`;

const Preco = styled.p`
    font-size: 42px;
    font-weight: 300;
    margin: 8px 0;
`;

const LinhaDivisoria = styled.hr`
    margin: 16px 0;
`;

const InfoPlano = styled.div`
    font-size: 24px;
    margin: 16px 0;

    p {
        margin: 0;
    }
`;

const Descricao = styled.p`
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 5.5rem;
`;

const BotaoFixo = styled(Botao)`
    margin-top: auto;
`;

const Tipo = styled.span`
    font-size: 12px;
`;

const CardPreco: React.FC<CardPrecoProps> = ({ nomePlano, preco, tipoPlano, uploadMbps, downloadMbps, descricao }) => {
    return (
        <CardContainer>
            <PlanoHeader>
                <NomePlano>{nomePlano}</NomePlano>
                <Preco>{preco}<Tipo>{tipoPlano}</Tipo></Preco>
            </PlanoHeader>
            <LinhaDivisoria />
            <InfoPlano>
                <p>{uploadMbps}Mbps<Tipo>/upload</Tipo></p>
                <p>{downloadMbps}Mbps<Tipo>/download</Tipo></p>
            </InfoPlano>
            <Descricao>{descricao}</Descricao>
            <BotaoFixo>Entrar em contato</BotaoFixo>
        </CardContainer>
    );
};

export default CardPreco;