import styled from "styled-components";
import CardPreco from "./components/CardPreco";
import Slider from "react-slick";

const Precos: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    const handlePlanoClick = (nomePlano: string, preco: string, downloadMbps: number) => {
        const whatsappNumero = "5511942957971";
        const textoMensagem = encodeURIComponent(`Olá, estou interessado no plano ${nomePlano} que custa ${preco} de ${downloadMbps}Mbps de download.`);
        const whatsappLink = `https://wa.me/${whatsappNumero}?text=${textoMensagem}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <Section>
            <Title>Consulte nossos preços</Title>
            <Container>
                <CustomSlider {...settings}>
                    <CardPreco
                        nomePlano="Iniciante"
                        preco="79,90"
                        tipoPlano="/mês"
                        downloadMbps={70}
                        descricao="O plano ideal para quem precisa de uma conexão básica, com estabilidade para tarefas cotidianas."
                        onClickPlano={handlePlanoClick}
                    />
                    <CardPreco
                        nomePlano="Básico"
                        preco="89,90"
                        tipoPlano="/mês"
                        downloadMbps={90}
                        descricao="Conexão intermediária para quem deseja mais velocidade para jogos online e streaming."
                        onClickPlano={handlePlanoClick}
                    />
                    <CardPreco
                        nomePlano="Intermediário"
                        preco="99,90"
                        tipoPlano="/mês"
                        downloadMbps={100}
                        descricao="Conexão intermediária para quem deseja mais velocidade para jogos online e streaming."
                        onClickPlano={handlePlanoClick}
                    />
                    <CardPreco
                        nomePlano="Popular"
                        preco="109,90"
                        tipoPlano="/mês"
                        downloadMbps={150}
                        descricao="Uma conexão rápida e estável para quem exige mais da internet no dia a dia."
                        popular={true}
                        onClickPlano={handlePlanoClick}
                    />
                    <CardPreco
                        nomePlano="Avançado"
                        preco="119,90"
                        tipoPlano="/mês"
                        downloadMbps={200}
                        descricao="Plano ideal para quem quer a maior velocidade disponível para múltiplos dispositivos."
                        onClickPlano={handlePlanoClick}
                    />
                    <CardPreco
                        nomePlano="Premium"
                        preco="129,90"
                        tipoPlano="/mês"
                        downloadMbps={300}
                        descricao="Plano para quem deseja a melhor performance de internet, com ultra velocidade."
                        recomendado={true}
                        onClickPlano={handlePlanoClick}
                    />
                    <CardPreco
                        nomePlano="Ultra"
                        preco="139,90"
                        tipoPlano="/mês"
                        downloadMbps={400}
                        descricao="O plano mais rápido para quem deseja fazer tudo ao mesmo tempo – jogos online, streaming 4K, e muito mais."
                        onClickPlano={handlePlanoClick}
                    />
                </CustomSlider>
            </Container>
            <Obs>Taxa de instalação no valor único de cem reais em forma comodato.</Obs>
        </Section>
    );
};

const CustomSlider = styled(Slider)`
    .slick-dots li button:before {
        color: ${(props) => props.theme.colors.backgroundLight};
        opacity: 1;
    }

    .slick-dots li.slick-active button:before {
        color: ${(props) => props.theme.colors.primary};
    }
`;

const Section = styled.section`
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.backgroundDark};
    opacity: 1;
    background: radial-gradient(circle, transparent 20%, #0d0d0d 20%, #0d0d0d 80%, transparent 80%, transparent),
        radial-gradient(circle, transparent 20%, #0d0d0d 20%, #0d0d0d 80%, transparent 80%, transparent) 25px 25px,
        linear-gradient(#1c1c1a 2px, transparent 2px) 0 -1px,
        linear-gradient(90deg, #1c1c1a 2px, #0d0d0d 2px) -1px 0;
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

const Obs = styled.p`
    margin: 0;
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 200;
    line-height: 1.0;
    text-align: center;
    color: ${(props) => props.theme.colors.backgroundLight};
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        font-size: 0.8rem;
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
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Container = styled.div`
    width: 90%;
    max-width: 90vw;
    margin: 0 auto;
    padding-bottom: 5vh;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 100vw;
    }
`;

export default Precos;
