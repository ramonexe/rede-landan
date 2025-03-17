import styled from "styled-components";
import CardPreco from "./components/CardPreco";

const Precos: React.FC = () => {
    return (
        <Section>
            <Title>Consulte nossos preços</Title>
            <Container>
                <CardPreco
                    nomePlano="Básico"
                    preco="R$ 49,90"
                    tipoPlano="/mês"
                    uploadMbps={30}
                    downloadMbps={50}
                    descricao="O plano ideal para quem precisa de uma conexão básica, com estabilidade para tarefas cotidianas."
                />
                <CardPreco
                    nomePlano="Popular"
                    preco="R$ 79,90"
                    tipoPlano="/mês"
                    uploadMbps={20}
                    downloadMbps={100}
                    descricao="Uma conexão rápida e estável para quem exige mais da internet no dia a dia."
                    recomendado={true}
                />
                <CardPreco
                    nomePlano="Avançado"
                    preco="R$ 99,90"
                    tipoPlano="/mês"
                    uploadMbps={50}
                    downloadMbps={200}
                    descricao="O plano mais rápido para quem deseja fazer tudo ao mesmo tempo – jogos online, streaming 4K, e muito mais."
                />
            </Container>
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
    font-size: 2.5rem;
    font-family: 'Istok Web', sans-serif;
    font-weight: 700;
    line-height: 1.0;
    text-align: center;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export default Precos;