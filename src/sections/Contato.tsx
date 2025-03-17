import { useState } from "react";
import styled from "styled-components";
import Botao from "./components/Botao";

const Contato: React.FC = () => {
    const [mensagem, setMensagem] = useState("");

    const handleMandarMensagem = () => {
        const whatsappNumero = "5511942957971";
        const textoMensagem = encodeURIComponent(mensagem);
        const whatsappLink = `https://wa.me/${whatsappNumero}?text=${textoMensagem}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <Section>
            <h1>Nos mande uma mensagem</h1>
            <Form>
                <TextArea
                    id="message"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua dúvida aqui..."
                />
                <Botao onClick={handleMandarMensagem}>
                    Enviar via WhatsApp
                </Botao>
            </Form>
        </Section>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 600px;
`;

const TextArea = styled.textarea`
    width: 100%;
    min-height: 50px;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 8px;
    margin-bottom: 1rem;
    resize: none;
`;

const Section = styled.section`
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.backgroundLight};
    padding: 5vh 0;
    width: 100vw;
    height: 100%;
    
    @media (max-width: 768px) {
        height: auto;
        padding: 5vh 0;
    }
`;

export default Contato;