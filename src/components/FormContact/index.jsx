import React from "react";
import { 
    Container, 
    FormContact 
} from "./style"

import Button from "../../components/Button"

const FormContacts = ( {show} ) => {

    return (
        <Container>

            { show && (
                <FormContact>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" placeholder="Digite seu Nome:" required/>

                    <div className="row">
                    <div className="tel">
                    <label htmlFor="tel">Telefone:</label>
                    <input type="tel" id="tel" placeholder="Digite seu telefo de contato:" required/>
                    </div>

                    <div className="e-mail">
                    <label htmlFor="e-mail"> E-mail:</label>
                    <input type="e-mail" id="e-mail" placeholder="Digite seu e-mail:" required/>
                    </div>
                    </div>

                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea name="mensagem" id="mensagem" placeholder="Como podemos ser util"></textarea>

                    <Button>Faça seu Orçamento</Button>
                </FormContact>
            )}  
        </Container>
    )

}

export default FormContacts