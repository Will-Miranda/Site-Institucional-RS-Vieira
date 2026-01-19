import React from "react";
import Title from "../../components/Title";
import { 
    Description, 
    Container, 
    Content 
} from "./styled"

import FormContact from "../../components/FormContact"
import Imagem from "../../components/Imagem"
import Diferenciais from "../../components/Diferenciais"

const WhoWeAre = ({ showForm = true, showImage = false }) => {


    return (
        <Container>
            <Content>
                <Description>
                    <Title>
                    Quem Somos
                    </Title>

                    <span>
                        Fundada em 2018 em Cachoeiro de Itapemirim-ES, a RS Vieira oferece soluções 
                        integradas em portaria, limpeza, conservação e facilities. Com equipe altamente 
                        capacitada e operação 24 horas por dia, 7 dias por semana, garantimos serviços 
                        eficientes, confiáveis e personalizados para cada cliente.
                    </span>

                    <Title>
                    Por que Escolher a RS Vieira?
                    </Title>

                    <ul>
                        <li><span>Profissionais treinados e avaliados continuamente.</span></li>
                        <li><span>Atendimento 24/7 - sempre prontos para atender.</span></li>
                        <li><span>Flexibilidade e agilidade para se adaptar às necessidades do cliente.</span></li>
                        <li><span>Integração total com a operação de cada parceiro.</span></li>
                        <li><span>Pontualidade, excelência e valorização do profissional.</span></li>
                    </ul>

                </Description>
                { showImage && <Imagem show={showImage} />}
                { showForm && <FormContact show={showForm} />}

                
            </Content>
        </Container>
    )
}

export default WhoWeAre