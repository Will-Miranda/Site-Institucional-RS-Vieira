import React, { useState } from "react";
import { 
    Container, 
    Logo, 
    MenuButton,
    NavMenu
} from "./style";
import LogoImg from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Container>
            <Logo>
                <Link to="/">
                    <img src={LogoImg} alt="RS Vieira Logo" />
                </Link>
            </Logo>
            
            <MenuButton
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
                $isOpen={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </MenuButton>
            
            <NavMenu $isOpen={isMenuOpen}>
                <Link to="/" onClick={closeMenu}>Início</Link>
                <Link to="/whoweare" onClick={closeMenu}>Quem Somos</Link>
                <Link to="/depoimentos" onClick={closeMenu}>Depoimentos</Link>
                <Link to="/services" onClick={closeMenu}>Serviços</Link>
                <Link to="/contact" onClick={closeMenu}>Contato</Link>
            </NavMenu>
        </Container>
    );
}

export default Header;