import{j as e}from"./index-pMpmpQ6J.js";import"./router-C0un3Mxa.js";import{d as r}from"./styled-B33nnLei.js";const o=r.button`
    width: 100%;
    height: 3rem;
    color: #fff;
    padding: 5px;
    margin-top: 10px;
    font-size: 1.5rem;
    border-radius: 5px;
    background-color: orange;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;

    :hover{
        color: gray;
    }
`,n=({props:t,children:i})=>e.jsx(o,{...t,children:i}),a=r.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 3rem 0;
    width: auto;
`,l=r.form`
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
 
`,c=({show:t})=>e.jsx(a,{children:t&&e.jsxs(l,{children:[e.jsx("label",{htmlFor:"name",children:"Nome:"}),e.jsx("input",{type:"text",id:"name",placeholder:"Digite seu Nome:",required:!0}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"tel",children:[e.jsx("label",{htmlFor:"tel",children:"Telefone:"}),e.jsx("input",{type:"tel",id:"tel",placeholder:"Digite seu telefo de contato:",required:!0})]}),e.jsxs("div",{className:"e-mail",children:[e.jsx("label",{htmlFor:"e-mail",children:" E-mail:"}),e.jsx("input",{type:"e-mail",id:"e-mail",placeholder:"Digite seu e-mail:",required:!0})]})]}),e.jsx("label",{htmlFor:"mensagem",children:"Mensagem:"}),e.jsx("textarea",{name:"mensagem",id:"mensagem",placeholder:"Como podemos ser util"}),e.jsx(n,{children:"Faça seu Orçamento"})]})});export{n as B,c as F};
