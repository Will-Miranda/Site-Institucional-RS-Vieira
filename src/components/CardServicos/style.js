import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    display: flex;
    background: linear-gradient(#808080, #0b0b0bff);
    align-items: center;
    flex-direction: column;
    padding-top: 2rem ;
    padding-bottom: 8rem;
`

export const Grid = styled.section`
    max-width: 1224px;
    display: grid;
    grid-template-columns: repeat( 3, minmax(200px, 1fr ));
    gap: 1rem;
    padding: 2rem;
`

export const CardsServices = styled.div`
    background: rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    width: 100%;
    max-width: 350px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
    }
`
 
export const ServicesImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`

export const ServicesTitle = styled.h3`
    padding: 3px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ffffffff;
`