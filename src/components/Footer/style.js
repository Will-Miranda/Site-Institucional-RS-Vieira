import styled from "styled-components";
import Img from "../../assets/monitoramento.webp"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-image: url(${Img});
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 40vh;
    object-fit: cover;
    border-top: 2px solid #ac961fff;

    
    &::before{
        content: '';
        background: rgba(0,0,0,0.6);
        position: absolute;
        inset: 0;
    }

`

export const Logo = styled.div`
    z-index: 1;
    width: 300px;
    display: flex;
    justify-content: right;

    img{
        width: 150px;
        height: 140px;}
`

export const FormEsq = styled.form`
    z-index: 1;
    width: 300px;
    text-align: center;
    line-height: 1.5rem;

    li{
        color: #fff;
        padding: 5px;
        font-size: 1.2rem;
        cursor: pointer;
        &:hover{
            color: #9b9b9bff;
        }
    }
`

export const FormDir = styled.form`
    z-index: 1;
    width: 380px;
    text-align: center;
    line-height: 1.2rem;

    li{
        color: #fff;
        padding: 5px;
        font-size: 1.2rem;
        overflow-wrap: break-word;

        &:hover{
            color: #9b9b9bff;
        }
    }
`