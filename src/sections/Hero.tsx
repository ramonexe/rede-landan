import styled, { keyframes } from "styled-components";
import Background from "../assets/wpp.webp";
import logo from "../assets/logo.png";

const Hero: React.FC = () => {
    return (
        <Section>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5vw', paddingBottom: '10vh' }}>
                <div>
                    <Logo src={logo} alt="Logo" />
                </div>
                <Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Titulo>
                        REDE<br />
                        LANDAN
                    </Titulo>
                    <Descricao>INTERNET DE FIBRA ÓTICA.</Descricao>
                </Div>
            </div>
        </Section>
    );
};

const flutuar = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

const Logo = styled.img`
    width: 160px;
    height: auto;
    animation: ${flutuar} 3s ease-in-out infinite;
    animation-fill-mode: forwards;

    @media (max-width: 768px) {
        width: 100px;
    }
`;

const slideDireita = keyframes`
    from {
        transform: translateX(-50%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const Div = styled.div`
    animation: ${slideDireita} 1s ease-out;
    animation-fill-mode: forwards;
`;

const Titulo = styled.h1`
    margin: 0;
    color: ${props => props.theme.colors.primary};
    font-size: 3.5rem;
    font-family: 'Istok Web', sans-serif;
    font-weight: 700;
    line-height: 1.0;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Descricao = styled.p`
    margin: 0;
    margin-right: 17.6px;
    font-size: 1rem;
    font-weight: 300;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 0.8rem;
        margin-right: 0;
    }
`;

const Section = styled.section`
    background: url(${Background}) no-repeat center center/cover;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    user-select: none;
`;

export default Hero;