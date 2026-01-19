import React from "react"
import { 
    Container, 
    Logo, 
    Menu 
} from "./style"
import LogoImg from "../../assets/Logo.png"
import { Link } from "react-router-dom"


function Header () {
    return (
        <Container>

            <Logo>
                <Link to="/"><img src={LogoImg} alt="Logo" /></Link>
            </Logo>
            
            <Menu>
                <Link to="/">Início</Link>
                <Link to="/whoweare">Quem Somos</Link>
                <Link to="/depoimentos">Depoimentos</Link>
                <Link to="/services">Serviços</Link>
                <Link to="/contact">Contato</Link>
            </Menu>

        </Container>
    )
}

export default Header 