import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        background-color: #e9e9e9ff;
    }

    ul, var {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`