# Dev Shop - E-commerce com React, TypeScript e Vite

Bem-vindo ao **Dev Shop**, um projeto de e-commerce desenvolvido com tecnologias modernas como **React**, **TypeScript** e **Vite**. Este projeto foi criado para oferecer uma experiência de compra online fluida e responsiva, com funcionalidades como carrinho de compras, navegação dinâmica e consumo de APIs.

---

## 🚀 Funcionalidades

- **Página inicial**: Exibe uma lista de produtos com informações detalhadas, como título, descrição, preço e imagem.
- **Carrinho de compras**: Adicione, remova e visualize os itens no carrinho, com cálculo automático do subtotal e total.
- **Detalhes do produto**: Página dedicada para exibir informações detalhadas de cada produto.
- **Navegação dinâmica**: Implementada com React Router para alternar entre as páginas sem recarregar a aplicação.
- **Consumo de API**: Integração com uma API para buscar os dados dos produtos.
- **Feedback visual**: Notificações de sucesso ou erro ao adicionar itens ao carrinho ou ao carregar dados.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida e moderna.
- **TailwindCSS**: Framework de CSS utilitário para estilização.
- **Axios**: Biblioteca para requisições HTTP.
- **React Router**: Gerenciamento de rotas na aplicação.
- **React Icons**: Conjunto de ícones para React.
- **React Hot Toast**: Biblioteca para exibir notificações.

---

## 📂 Estrutura do Projeto

```plaintext
ecommerce/
├── public/                # Arquivos públicos (ex.: favicon)
├── src/                   # Código-fonte da aplicação
│   ├── components/        # Componentes reutilizáveis (Header, Footer, Layout)
│   ├── context/           # Context API para gerenciamento de estado (ex.: CartContext)
│   ├── pages/             # Páginas principais (Home, Cart, Product)
│   ├── services/          # Serviços (ex.: configuração da API)
│   ├── App.tsx            # Configuração de rotas
│   ├── main.tsx           # Ponto de entrada da aplicação
│   └── index.css          # Estilos globais
├── db.json                # Mock de dados para a API local
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configurações do TypeScript
├── vite.config.ts         # Configurações do Vite
└── README.md              # Documentação do projeto
