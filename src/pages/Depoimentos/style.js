import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    width: 100%;
    
    .cor{
        color: #000;
    }
`;

export const Testimonial = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 1.5rem 10rem;
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
`;

export const Content = styled.div`
    max-width: 800px;
    font-size: 1rem;
    line-height: 1.6;

    p {
        margin-bottom: 1rem;
    }

`;

export const TextImg = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;

    strong {
        display: block;
        font-weight: bold;
        margin-top: 0.5rem;
    }

    span {
        font-size: 0.9rem;
        color: #444;
    }
`

export const ContainerForm = styled.section`
    width: 100%;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
`

export const Form = styled.section`
    width: 924px;
`
