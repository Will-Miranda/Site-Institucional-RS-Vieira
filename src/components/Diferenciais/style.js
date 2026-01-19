import styled from "styled-components";
import Img from "../../assets/monitoramento.webp"

export const Container = styled.div`
    height: 80vh;
    background-image: url(${Img});
    background-position: center;
    background-size: cover;
    position: relative;
    
    &::before {
        content: '';
        inset: 0;
        position: absolute;
        background: rgba(0,0,0,0.6);
    }

`

export const Outers = styled.section`

    .cima{
        position: relative;
    }

    ul{
        display: flex;
        justify-content: space-evenly;
        position: relative;
        padding: 1.5rem 5rem 0 5rem;
    }

    li{
        background-color: rgba(192, 131, 26, 0.46);
        width: 290px;
        height: 350px;
        padding: 0.5rem;
        border-radius: 1rem 5rem 1rem 1rem;

        h4{
            font-size: 2rem;
            line-height: 2.5rem;
            margin-bottom: 1.1rem;
            margin-top: 1.5rem;
            color: #fff;

        }

        span{
            font-size: 1rem;
            color: #fff;
        }
    }


`
