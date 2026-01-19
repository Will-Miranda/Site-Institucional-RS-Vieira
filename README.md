# Rs-Vieira - Site Institucional

Site institucional moderno da Rs-Vieira, desenvolvido com React e tecnologias de ponta para apresentar serviços e facilitar o contato com clientes.

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 19.0.0
- **Build Tool**: Vite 6.3.1
- **Estilização**: Styled Components 6.1.19
- **Roteamento**: React Router DOM 7.8.2
- **Carrossel**: React Slick 0.31.0
- **Linting**: ESLint 9.22.0

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
│   ├── Banner/    # Banner principal
│   ├── Header/    # Cabeçalho com navegação
│   ├── Footer/    # Rodapé
│   └── ...
├── pages/         # Páginas da aplicação
│   ├── Home/      # Página principal
│   ├── Contact/   # Contato
│   ├── Services/  # Serviços
│   └── ...
├── StyleGlobal/   # Estilos globais
├── assets/        # Imagens e recursos estáticos
└── main.jsx       # Ponto de entrada
```

## 🛠️ Instalação e Setup

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd Rs-Vieira
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador**
Acesse `http://localhost:5173`

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa ESLint

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

O build será gerado na pasta `dist/`.

### Deploy em Plataformas

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
1. Faça upload da pasta `dist/`
2. Configure o comando de build: `npm run build`
3. Configure a pasta de publicação: `dist`

#### Surge
```bash
npm install -g surge
npm run build
surge dist
```

## 🎯 Funcionalidades

- **Design Responsivo**: Adaptado para todos os dispositivos
- **Navegação Intuitiva**: Menu de navegação com roteamento
- **Formulário de Contato**: Integração pronta para backend
- **Carrossel de Depoimentos**: Apresentação de feedbacks
- **Otimizado para SEO**: Metadados e semântica HTML5

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_API_URL=https://sua-api.com
VITE_CONTACT_EMAIL=contato@rsvieira.com
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

- **Empresa**: Rs-Vieira
- **Email**: contato@rsvieira.com
- **Site**: https://rsvieira.com

---

Desenvolvido com ❤️ por [Seu Nome/Empresa]
