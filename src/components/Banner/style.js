import styled from "styled-components";
import BannerImg from "../../assets/Banner.webp"


export const BannerP = styled.div`
    height: 80vh;
    background-image: url(${BannerImg});
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #ac961fff;
    gap: 3rem;

    &::before {
        content: ''; 
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.6); 
  }
`

export const Description = styled.section`
    width: 500px;
    color: #fff;
    position: relative;
    z-index: 1;


    h2{
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    span{
        font-size: 1.2rem;
        line-height: 2rem;
    }
`

export const Contact = styled.section`
    position: relative;
    width: 600px;
    z-index: 1;
    color: #fff;
    
    label {
        font-size: 1.2rem;
        display: block;
        margin-top: 10px;
        font-weight: bold;
    }
    
    input, textarea {
        width: 100%;
        color: #fff;
        font-size: 1.2rem;
        padding: 15px;
        margin-top: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        background: rgba(0,0,0,0.2);
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    .row{
        display: flex;
        gap: 10px;
    }

    .tel, .e-mail{
        flex: 1;
    }  
    
`