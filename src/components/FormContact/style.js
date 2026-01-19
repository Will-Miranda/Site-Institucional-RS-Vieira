import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 3rem 0;
    width: auto;
`

export const FormContact = styled.form`
    width: 100%;
    z-index: 1;
    color: #fff;
    position: relative;

    

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