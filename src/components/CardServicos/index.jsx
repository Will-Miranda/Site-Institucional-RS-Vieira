import React from "react"
import { 
    Container, 
    ServicesImage, 
    ServicesTitle, 
    CardsServices, 
    Grid
} from "./style"
import Title from "../Title"


import Img1 from "../../assets/Portaria.webp"
import Img2 from "../../assets/Eventos.webp"
import Img3 from "../../assets/monitoramento.webp"
import Img4 from "../../assets/Acesso.webp"
import Img5 from "../../assets/Ronda.webp"
import Img6 from "../../assets/Recepção.webp"
import Img7 from "../../assets/Eletronico.png"
import Img8 from "../../assets/Projetos.webp"
import Img9 from "../../assets/Supervisão.webp"

const Services = [
    {id: 1, title: "Portaria patrimonial", img: Img1 },
    {id: 2, title: "Suporte em eventos", img: Img2 },
    {id: 3, title: "Agente de Monitoramentos", img: Img3 },
    {id: 4, title: "Controlador de Acesso", img: Img4 },
    {id: 5, title: "Ronda Motorizada Intramuros", img: Img5 },
    {id: 6, title: "Recepção", img: Img6 },
    {id: 7, title: "Segurança Eletrônica", img: Img7 },
    {id: 8, title: "Consultoria e Projetos", img: Img8 },
    {id: 9, title: "Supervisão e Fiscalização", img: Img9 }
]

const CardServicos = () => {

    return(
        
        <Container>

            <Title>SERVIÇOS DA RS VIEIRA</Title>

            <Grid>

                {Services.map(({id, title, img}) => (
                    <CardsServices key={id}>
                        <ServicesImage src={img} alt={title} />
                        <ServicesTitle> {title} </ServicesTitle>
                    </CardsServices>
                ))}
            
            </Grid>

        </Container>
    )

}

export default CardServicos