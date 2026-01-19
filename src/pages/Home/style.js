import styled from "styled-components";

export const Container = styled.div`
    
`

export const ContainerContact = styled.section`
    background: #000;
    display: flex;
    flex-direction: column; 
    align-items: center;
`

export const TextImg = styled.section`
    display: flex; 
    margin-bottom: 20px;


    h4 {
        color: #fff;
        background-color: #876809c8;
        width: 610px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 0 10px 10px ;
        font-size: 1.8rem;
        padding: 1rem;
        line-height: 2.5rem;
        text-align: center;
    }

    img {
        width: 910px;
        height: 300px;
        object-fit: cover;
        border-radius: 0 0 2rem 2rem ;
    }
`

export const ContainerForm = styled.section`
    width: 924px;
`