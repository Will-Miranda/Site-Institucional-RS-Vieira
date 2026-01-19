import React from "react";
import {
    Container,
    Outers
} from "./style"
import Title from "../Title"

const Diferenciais = () => {
    return (
        <Container>
            <Outers>
                <Title className="cima">DIFERENCIAIS DA RS VIEIRA</Title>
                <ul>
                    <li>
                        <h4>Supervisão Operacional</h4>
                        <span>
                            Nossa equipe de supervisão opera 24 horas por dia, 
                            oferecendo suporte contínuo aos postos de trabalho e 
                            executando checklists e inspeções diárias para garantir a 
                            qualidade e eficiência dos serviços prestados aos clientes.
                        </span>
                    </li>

                    <li>
                        <h4>Implantação</h4>
                        <span>
                            Após a formalização de um novo contrato, realizamos uma 
                            visita técnica ao cliente para mapear rotinas e procedimentos, 
                            estabelecendo a base para o treinamento da equipe designada.
                        </span>
                    </li>

                    <li>
                        <h4>Treinamento e Capacitação</h4>
                        <span>
                            Todos os colaboradores, ao ingressarem na empresa, passam por um 
                            processo de integração para conhecer nossos procedimentos e políticas, 
                            além de receberem instrução prática em campo conforme as normas 
                            específicas de cada cliente.
                        </span>
                    </li>

                    <li>
                        <h4>Responsabilidade Jurídica</h4>
                        <span>
                            Assumimos a responsabilidade jurídica sobre eventuais reclamações 
                            trabalhistas, fornecendo comprovantes de recolhimento de encargos e 
                            tributos relativos à prestação dos serviços. Atuamos de forma sólida 
                            no mercado, respaldados por referências de clientes e fornecedores.
                        </span>
                    </li>
                </ul>
            </Outers>

        </Container>
    )
}

export default Diferenciais