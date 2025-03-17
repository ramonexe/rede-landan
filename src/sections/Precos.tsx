import styled from "styled-components";
import CardPreco from "./components/CardPreco";

const Precos: React.FC = () => {
    return (
        <Section>
            <Title>Consulte nossos preços</Title>
            <Container>
                <CardPreco
                    nomePlano="Básico"
                    preco="49,90"
                    tipoPlano="/mês"
                    uploadMbps={30}
                    downloadMbps={50}
                    descricao="O plano ideal para quem precisa de uma conexão básica, com estabilidade para tarefas cotidianas."
                />
                <CardPreco
                    nomePlano="Popular"
                    preco="99,90"
                    tipoPlano="/mês"
                    uploadMbps={60}
                    downloadMbps={100}
                    descricao="Uma conexão rápida e estável para quem exige mais da internet no dia a dia."
                    recomendado={true}
                />
                <CardPreco
                    nomePlano="Avançado"
                    preco="159,90"
                    tipoPlano="/mês"
                    uploadMbps={100}
                    downloadMbps={170}
                    descricao="O plano mais rápido para quem deseja fazer tudo ao mesmo tempo – jogos online, streaming 4K, e muito mais."
                />
            </Container>
            <TituloDescricao>Precisando de um plano específico?</TituloDescricao>
            <Descricao>Nossa equipe pode fazer um plano personalizado para você de acordo com suas necessidades, do jeitinho que você e sua família precisa!
                <br />
                <br />
                Contate REDE LANDAN para saber mais sobre sua futura internet.</Descricao>
        </Section>
    );
};

const Section = styled.section`
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.backgroundDark};
    opacity: 1;
    background: radial-gradient(circle, transparent 20%, #0D0D0D 20%, #0D0D0D 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #0D0D0D 20%, #0D0D0D 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#1c1c1a 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #1c1c1a 2px, #0D0D0D 2px) -1px 0;
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
    padding: 5vh 0;
    width: 100vw;
    height: 100%;
    
    @media (max-width: 768px) {
        height: auto;
        min-height: 100vh;
        padding: 5vh 0;
    }
`;

const Title = styled.h1`
    margin: 0;
    padding-bottom: 5vh;
    font-size: 2rem;
    font-family: 'Istok Web', sans-serif;
    font-weight: 700;
    line-height: 1.0;
    text-align: center;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const TituloDescricao = styled.h2`
    margin: 0;
    font-size: 1.5rem;
    font-family: 'Istok Web', sans-serif;
    font-weight: 700;
    line-height: 1.0;
    text-align: center;
    color: ${props => props.theme.colors.backgroundLight};
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const Descricao = styled.p`
    margin: 0;
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 200;
    line-height: 1.0;
    text-align: center;
    color: ${props => props.theme.colors.backgroundLight};
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-bottom: 5vh;
`;

export default Precos;