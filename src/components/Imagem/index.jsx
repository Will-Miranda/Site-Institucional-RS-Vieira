import React from "react";
import { Image } from "./style"
import Img from "../../assets/image.webp"

const Imagem = ({show}) => {

    if (!show) return null;

    return (
        
        <Image>
            
            <img src={Img} alt="Nossa Essência - RS Vieira" />
            <h4>Nossa Essência</h4>
            <span>
                Inovação • Confiança • Qualidade em cada serviço prestado
            </span>
            
        </Image>
        
    )
}

export default Imagem