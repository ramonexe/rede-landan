import React from 'react';
import styled from 'styled-components';
import Botao from './Botao';

interface CardPrecoProps {
    nomePlano: string;
    preco: string;
    tipoPlano: string;
    downloadMbps: number;
    descricao: string;
    recomendado?: boolean;
    popular?: boolean;
    onClickPlano: (nomePlano: string, preco: string, downloadMbps: number) => void;
}

const CardPreco: React.FC<CardPrecoProps> = ({ nomePlano, preco, tipoPlano, downloadMbps, descricao, recomendado, popular, onClickPlano }) => {
    const handleMandarMensagem = () => {
        onClickPlano(nomePlano, preco, downloadMbps);
    };

    return (
        <CardContainer>
            {recomendado && <FaixaRecomendado>Recomendado</FaixaRecomendado>}
            {popular && <FaixaPopular>Popular</FaixaPopular>}
            <CardWrapper>
            <PlanoHeader>
                <NomePlano>{nomePlano}</NomePlano>
                <Preco><Moeda>R$</Moeda>{preco}<Tipo>{tipoPlano}</Tipo></Preco>
            </PlanoHeader>
            <LinhaDivisoria />
            <InfoPlano>
                <p>{downloadMbps}Mbps<Tipo>/download</Tipo></p>
            </InfoPlano>
            <Descricao>{descricao}</Descricao>
            <BotaoFixo onClick={handleMandarMensagem}>Entrar em contato</BotaoFixo>
            </CardWrapper>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.colors.text};
    border-radius: 8px;
    padding: 16px;
    max-width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin: 5px;
    
    @media (max-width: 768px) {
        max-width: 300px;
        height: 500px;
    }

    @media (max-width: 425px) {
        max-width: 250px;
        height: 450px;
    }
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

const Moeda = styled.span`
    font-size: 24px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    position: relative;
`;

const FaixaRecomendado = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    padding: 5px 10px;
    font-size: 12px;
    font-weight: bold;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
`;

const FaixaPopular = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: #8400ff;
    color: #ffffff;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: bold;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
`;

export default CardPreco;