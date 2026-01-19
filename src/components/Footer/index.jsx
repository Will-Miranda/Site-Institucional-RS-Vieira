import React from "react";
import { 
    Container, 
    Logo, 
    FormEsq, 
    FormDir 
} from "./style"
import LogoImg from "../../assets/Logo.png"
import Title from "../../components/Title"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Container>
            
            <Logo >
                <Link to="/"><img src={LogoImg} alt="Logo" /></Link>
            </Logo>

            <FormEsq>
                <Title>
                    Institucional
                </Title>
                <ul>
                    <Link to="/"><li>Inicio</li></Link>
                    <Link to="/whoweare"><li>Quem Somos</li></Link>
                    <Link to="/services"><li>Serviços</li></Link>
                    <Link to="/depoimentos"><li>Depoimentos</li></Link>
                    <Link to="/contact"><li>contato</li></Link>
                </ul>
            </FormEsq>

            <FormDir> 
                <Title>
                    Contato
                </Title>
                <ul>
                    <li>📞(28)99923-5538</li>
                    <li>☎️(28)3027-2245</li>
                    <li>📩rsvieiraservicos@rsvieiraservicos.com.br</li>
                    <li>
                        📍 Rua Milton Pacheco da Silva n° 22, 
                        Cachoeiro de Itapemirim-ES
                    </li>
                </ul>
            </FormDir>

        </Container>
    )
}

export default Footer 