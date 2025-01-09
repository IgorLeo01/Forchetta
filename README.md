# Forchetta

Forchetta é um projeto desenvolvido para um restaurante italiano com Vue 3 e TailwindCSS, que oferece uma experiência web sofisticada para explorar um menu italiano, realizar reservas e descobrir mais sobre o restaurante. Este projeto utiliza o Vite para construção e desenvolvimento, Vue Router para navegação e TypeScript para maior robustez e tipagem.

---

## 📂 Estrutura do Projeto

- **`src/`**: Contém os arquivos principais da aplicação.
  - **`components/`**: Componentes reutilizáveis da interface.
  - **`views/`**: Páginas principais da aplicação.
  - **`assets/`**: Imagens, ícones e outros arquivos estáticos.
  - **`layouts/`**: Componentes que aparecem nas demais telas, como Navbar e Footer.
  - **`router/`**: Configuração das rotas da aplicação com Vue Router.
- **`public/`**: Arquivos estáticos acessíveis publicamente.
- **`tailwind.config.js`**: Configuração do TailwindCSS.
- **`vite.config.js`**: Configuração do Vite.

---

## 🚀 Tecnologias Utilizadas

- **[Vue 3]**: Framework progressivo para construção de interfaces de usuário.
- **[Vue Router]**: Gerenciamento de rotas para aplicações Vue.
- **[Vite]**: Ferramenta de build rápida.
- **[TypeScript]**: Superset de JavaScript para tipagem estática.
- **[TailwindCSS]**: Framework CSS utilitário para estilização.

---

## 📦 Dependências e Scripts

### Dependências de Produção

- `vue`: Core do Vue.js.
- `vue-router`: Gerenciamento de navegação.

### Dependências de Desenvolvimento

- `@vitejs/plugin-vue`: Plugin para usar Vue com Vite.
- `@vue/tsconfig`: Configuração TypeScript oficial para Vue 3.
- `tailwindcss`: Framework CSS utilitário.
- `typescript`: Linguagem para JavaScript com tipagem estática.
- `vite`: Ferramenta de build para front-end.
- `vue-tsc`: Checagem de tipos do Vue em TypeScript.

### Scripts no `package.json`

- `dev`: Inicia o servidor de desenvolvimento local.
- `build`: Faz o build da aplicação para produção.
- `preview`: Visualiza a aplicação em modo de produção.

---

## 🛠️ Instalação e Uso

### Pré-requisitos

Certifique-se de que você tenha o Node.js (recomendado: versão LTS) e o npm ou yarn instalados.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/forchetta.git
   cd forchetta
   ```
   Instale as dependências:
 
   ```bash
   npm install
   ```
   
   Inicie o servidor de desenvolvimento:
   
   ```bash
   npm run dev
   ```

Acesse a aplicação no navegador:

  ```bash
   http://localhost:5173
   ```

Para criar o build de produção:

   ```bash
   npm run build
   ```
Para visualizar o build de produção

   ```bash
   http://localhost:5173
   ```
---
###🌟 Funcionalidades
Navegação Dinâmica: Navegue entre páginas como "Sobre Nós", "Menu" e "Reservar" utilizando Vue Router.
Design Responsivo: A aplicação é completamente responsiva, criada com TailwindCSS.
Animações e Transições: Animações fluídas para uma experiência de usuário mais rica.
Gerenciamento de Estado Simples: Estado do carrossel e outros elementos controlados com Vue.

---

##✨ Estilização com TailwindCSS
O TailwindCSS foi utilizado para estilização, permitindo um design moderno e responsivo com utilitários. O arquivo de configuração (tailwind.config.js) permite personalizações adicionais.

---

##📚 Estrutura de Rotas
O Vue Router gerencia as seguintes rotas:

---

/: Página inicial com carrossel de conteúdo e menu principal.
/sobre: Página "Sobre Nós", detalhando o restaurante.
/menu: Página para explorar o menu gastronômico.
/reservar: Página para fazer reservas online.

---

##📞 Contato
Se você tiver dúvidas ou sugestões, entre em contato pelo e-mail: leo01devps@gmail.com

