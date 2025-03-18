import styled from "styled-components";
import Persony from "../assets/persony.png";
import Botao from "./components/Botao";

const Sobre: React.FC = () => {
    const handleMandarMensagem = () => {
        const whatsappNumero = "5511942957971";
        const textoMensagem = encodeURIComponent("Olá, gostaria de mais informações sobre os serviços da Rede Landan.");
        const whatsappLink = `https://wa.me/${whatsappNumero}?text=${textoMensagem}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <Section>
            <Container>
                <ContentWrapper>
                    <TextContainer>
                        <Title>Tenha a melhor <br />internet da cidade</Title>
                        <Descricao>Com preços que cabe no seu bolso e com uma velocidade incrível!</Descricao>
                        <BotaoContainer>
                            <Botao onClick={handleMandarMensagem}>Saiba mais</Botao>
                        </BotaoContainer>
                    </TextContainer>
                    <ImageWrapper>
                        <Imagem src={Persony} alt="Personagem" />
                    </ImageWrapper>
                </ContentWrapper>
            </Container>
        </Section>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

const BotaoContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 160px;
    margin-top: 2rem;

    @media (max-width: 768px) {
        text-align: center;
        margin-top: 2rem;
        width: 100%;
    }
`;

const TextContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 50%;
    
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin-top: 2rem;
        order: 2;
    }
`;

const ImageWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    height: 100%;
    @media (max-width: 768px) {
        margin: 0 auto;
        padding-top: 2rem;
        order: 1;
    }
`;

const Imagem = styled.img`
    z-index: 0;
    
    @media (max-width: 768px) {
        max-width: 600px;
    }

    @media (max-width: 480px) {
        max-width: 400px;
    }

    @media (max-width: 320px) {
        max-width: 300px;
    }
`;

const Title = styled.h1`
    margin: 0;
    padding-top: 5rem;
    font-family: "Istok Web";
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    color: ${props => props.theme.colors.primary};
    white-space: nowrap;
    
    @media (max-width: 1200px) {
        font-size: 3.5rem;
    }
    
    @media (max-width: 768px) {
        font-size: 2rem;
        white-space: normal;
        br {
            display: none;
        }
    }
`;

const Descricao = styled.p`
    margin: 0;
    color: #0D0D0D;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
    white-space: nowrap;
    
    @media (max-width: 1200px) {
        font-size: 1.5rem;
        white-space: normal;
    }
    
    @media (max-width: 1024px) {
        font-size: 1.2rem;
        white-space: normal;
    }
    
    @media (max-width: 768px) {
        font-size: 1rem;
        white-space: normal;
        margin-top: 1rem;
    }
`;

const Section = styled.section`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.backgroundLight};
    padding-top: 5vh;
    width: 100vw;
    height: 100vh;
    
    @media (max-width: 768px) {
        height: auto;
    
    }
`;

export default Sobre;