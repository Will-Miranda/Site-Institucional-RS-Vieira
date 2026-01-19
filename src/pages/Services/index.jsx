import React from "react";
import CardServicos from "../../components/CardServicos"
import FormContact from "../../components/FormContact";
import Title from "../../components/Title";
import { 
    Container, 
    ContainerForm,
    Contact
} from "./style"


const Services = () => {
    return (
        <Container>
            <CardServicos />
            <Title className="cor2">
                ENTRE EM CONTATO
            </Title>
            <ContainerForm>
                <Contact>
                    <FormContact show={true}/>
                </Contact>
            </ContainerForm>
        </Container>
    )
}

export default Services