import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    padding-bottom: 3rem;
    background-color: #b8b6b6ff;
`

export const CardsClient = styled.div`
    border-bottom: 2px solid rgba(142, 141, 141, 0.39);
    border-top: 2px solid rgba(92, 92, 92, 0.39);
    width: auto;
    padding: 1rem 0;
`

export const ClientImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: fill;
`
