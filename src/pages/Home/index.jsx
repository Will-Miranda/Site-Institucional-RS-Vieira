import React from "react";
import Banner from "../../components/Banner"
import CardServicos from "../../components/CardServicos"
import CardClient from "../../components/CardClient"
import { 
    Container, 
    ContainerContact, 
    TextImg,
    ContainerForm
} from "./style";

import FormContact from "../../components/FormContact";
import Title from "../../components/Title";
import WhoWeAre from "../WhoWeAre";
import Img from "../../assets/monitoramento.webp"
import Diferenciais from "../../components/Diferenciais";


const Home = () => {


    return(
        <Container>
            <Banner />
            <CardServicos />
            <WhoWeAre showForm={false} showImage={true}/>

            <Diferenciais />

            <CardClient />

            <ContainerContact>
                <TextImg>
                    <h4>
                        Segurança e Transparencia em Serviço
                        "O bem e seu, o cuidar é nosso"
                    </h4>
                    <img src={Img} alt="Serviços de Monitoramento - RS Vieira" />
                </TextImg>

                <Title>ENTRE EM CONTATO</Title>

                <ContainerForm>
                    <FormContact show={true}/>
                </ContainerForm>

            </ContainerContact>    
        
        </Container>
    )
}

export default Home