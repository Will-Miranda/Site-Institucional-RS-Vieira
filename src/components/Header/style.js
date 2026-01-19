import styled from "styled-components";

export const Container = styled.header`
    height: 150px;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    background-color: #000;
    border-bottom: 2px solid #ac961fff;
`;

export const Logo = styled.div`
    img{
        width: 150px;
        height: 140px;
    }
`;

export const MenuButton = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
        width: 30px;
        height: 3px;
        background: #f1f1f1;
        border-radius: 3px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }

    ${({ $isOpen }) => $isOpen && `
        span:first-child {
            transform: rotate(45deg);
        }

        span:nth-child(2) {
            opacity: 0;
        }

        span:nth-child(3) {
            transform: rotate(-45deg);
        }
    `}

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const NavMenu = styled.nav`
    display: flex;
    gap: 1rem;

    a {
        color: #f1f1f1;
        font-size: 1.3rem;
        padding: 10px;
        margin-left: 5px;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    :hover{
        border-radius: 10px;
        background: #b0b0b0ff;
        color: #000;
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 80px;
        right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
        flex-direction: column;
        background: #000;
        width: 100%;
        text-align: center;
        transition: 0.3s ease-in-out;
        padding: 2rem 0;
        gap: 0;
        border-bottom: 2px solid #ac961fff;

        a {
            display: block;
            padding: 1rem;
            margin: 0.5rem 0;

            &:hover {
                background: #ac961fff;
                color: #000;
                transform: none;
            }
        }
    }
`;
