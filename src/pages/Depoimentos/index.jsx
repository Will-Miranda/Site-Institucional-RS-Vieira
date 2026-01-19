import React from "react";
import Title from "../../components/Title"
import FormContact from "../../components/FormContact"
import {
    Container,
    Testimonial,
    Image,
    Content,
    TextImg,
    ContainerForm,
    Form
} from "./style"

import Img from "../../assets/Depoimentos1.webp"
import Img2 from "../../assets/Depoimentos2.webp"
import Img3 from "../../assets/Depoimentos3.webp"
import Img4 from "../../assets/Depoimentos4.webp"

const Depoimentos = () => {
    return (
        <Container>
            <Title className="cor" > DEPOIMENTOS DE NOSSOS CLIENTES </Title>

            <Testimonial>
                <TextImg>
                    <Image src={Img} alt="Raquel" />
                    <strong>Raquel de Vargas Ferreira</strong><br />
                    <span>
                        Coordenadora de Atendimento ao Cliente<br />
                        Hospital Evangélico de Cachoeiro de Itapemirim - ES
                    </span>
                </TextImg>

                <Content>
                    <p>
                        "Somos clientes da RS Vieira, e está empresa tem excelência no cumprimento
                        de suas obrigações. A cordialidade e o comprometimento são atributos sempre
                        presentes, e toda equipe transmite confiança e qualidade desde o primeiro contato.
                        A preocupação com a satisfação do cliente é sempre o primordial dessa parceria.
                        Estou muito satisfeita com a reciprocidade e profissionalismo que operam em seu segmento".
                    </p>
                    
                </Content>
            </Testimonial>

            <Testimonial reverse>
                <Content>
                    <p>
                        Quero agradecer a empresa RS Vieira Serviços a parceria e oportunidade de
                        conhecer de perto o trabalho de vocês. Uma equipe alinhada, educada e respeitosa
                        mantendo sempre a eficiência e cordialidade na portaria do nosso condomínio!
                    </p>
                    
                </Content>
                <TextImg>
                    <Image src={Img2} alt="Viviane" />
                    <strong>Viviane Santos</strong><br />
                    <span>
                        Síndica do Condomínio Aldeia da Águas<br />
                        Cachoeiro de Itapemirim - ES
                    </span>
                </TextImg>

            </Testimonial>

            <Testimonial>
                <TextImg>
                    <Image src={Img3} alt="Lucas" />
                    <strong>Lucas Thobias Garcheter</strong><br />
                    <span>
                        Gerente de Produção - Imarcal<br />Vargem Alta - ES
                    </span>
                </TextImg>

                <Content>
                    <p>
                        A RS Vieira Serviços tem sido uma parceira valiosa para nós na Imarcal Industria
                        de Mármores e Calcário. A equipe demonstra um cuidado excepcional com a segurança,
                        controle de acesso e um atendimento sempre cordial, fazendo com que todos se sintam
                        bem recebidos e protegidos. A confiança que temos na qualidade dos serviços prestados
                        reflete o compromisso e a dedicação deles em cada detalhe. Estamos muito satisfeitos
                        com essa parceria de sucesso.
                    </p>
                    
                </Content>
            </Testimonial>

            <Testimonial reverse>
                <Content>
                    <p>
                        A Empresa R.S Vieira Serviços tem sido uma parceira na segurança e controle de acesso
                        de nossos colaboradores e instalações. Desde que o Colégio IPE passou a contar com seus
                        serviços, sentimos mais tranquilidade no dia a dia. Trata-se de uma empresa séria,
                        comprometida e altamente eficiente, recomendo RS Vieira a todos que buscam uma parceria
                        com qualidade e confiabilidade.
                    </p>
                </Content>
                <TextImg>
                    <Image src={Img4} alt="Margareth" />
                    <strong>Margareth Chequer</strong><br />
                    <span>
                        Tesoureira Administrativa<br />
                        Ricardo Vieira Luizette Azeredo<br />
                        Diretores IPE - Instituto de Pesquisas Educacionais
                    </span>

                </TextImg>
            </Testimonial>

            <ContainerForm>
                <Title>ENTRE EM CONTATO</Title>
                <Form>
                    <FormContact show={true}/>
                </Form>
            </ContainerForm>

        </Container>
    )
}

export default Depoimentos;
