import React from "react";
import FormContact from "../../components/FormContact"
import Title from "../../components/Title"
import { 
    Container, 
    Description, 
    AreaContato
} from "./style"

const Contact = () => {
    return (
        <Container>

            <AreaContato>

                <Description>
                    <Title>ENTRE EM CONTATO</Title>
                    <span>(28)99923-5538</span>
                    <span>(28)3027-2245</span>
                    <span>rsvieiraservicos@rsvieiraservicos.com.br</span>
                    <span>Rua Milton Pacheco da Silva n° 22, Cachoeiro de Itapemirim-ES</span>
                </Description>

                    <FormContact show={true} />

            </AreaContato>

            <iframe 
            title="map-localization"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.792369811843!2d-41.1448187!3d-20.840089199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb95d6b8f303f0d%3A0xf9c95d2a32120dbb!2sCOI%20-%20Central%20de%20Opera%C3%A7%C3%B5es%20Integradas%20da%20RS%20Vieira%20Servi%C3%A7os%20-%20R.%20Milton%20Pach%C3%AAco%20da%20Silva%2C%2022%20-%20Gilson%20Carone%2C%20Cachoeiro%20de%20Itapemirim%20-%20ES%2C%2029310-532!5e0!3m2!1spt-BR!2sbr!4v1756521415422!5m2!1spt-BR!2sbr" 
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </Container>
    )
}

export default Contact