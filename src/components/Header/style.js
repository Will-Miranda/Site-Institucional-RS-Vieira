import styled from "styled-components"

export const Container = styled.header`
    height: 150px;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    background-color: #000;
    border-bottom: 2px solid #ac961fff;
`

export const Logo = styled.div`
    img{
        width: 150px;
        height: 140px;
    }
`

export const Menu = styled.nav`
    a{
        color: #f1f1f1;
        font-size: 1.3rem;
        padding: 10px;
        margin-left: 5px;
    }
    
    :hover{
        border-radius: 10px;
        background: #b0b0b0ff;
        color: #000;
    }
`
