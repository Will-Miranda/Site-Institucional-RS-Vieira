import React from "react";
import { BannerP, Description, Contact } from "./style";
import Button from "../Button";

const Banner = () => {
    return (

        <BannerP alt="Image-Banner">

            <Description>
                <h2>Soluções Integradas e Serviços</h2>
                <span>
                    Soluções personalizadas que combinam tecnologia, 
                    agilidade e profissionais altamente qualificados 
                    para garantir proteção total, 24 horas por dia.
                </span>
            </Description>
            <Contact>
                <form action="">
                    <label For="name">Nome:</label>
                    <input type="text" id="name" placeholder="Digite seu Nome" required />

                    <div className="row">
                    <div className="tel">
                    <label For="tel">Telefone:</label>
                    <input type="tel" id="tel" name="tel" placeholder="Digite seu Numero" required />
                    </div>

                    <div className="e-mail">
                    <label For="e-mail">E-mail:</label>
                    <input type="e-mail" id="e-mail" name="e-mail" placeholder="Informe seu E-mail" required />
                    </div>
                    </div>

                    <label For="mensagem">Mensagem:</label>
                    <textarea name="mensagem" id="mensagem" placeholder="Fale um pouco sobre seu patrimonio" ></textarea>
                
                    <Button> Faça um Orçamento </Button>
                </form>
            </Contact>
        </BannerP>
    )
}

export default Banner 