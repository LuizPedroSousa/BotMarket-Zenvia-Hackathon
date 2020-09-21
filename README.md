# BotMarket

BotMarket é um novo canal de compras de supermercados online, utilizando o canal de comunicações do WhatsApp atrelado a um sistema de chatbot disponibilizado pela Zenvia.

## Como instalar

**Requisitos**:

- NodeJS
- NPM ou YARN
- Expo-Cli
- MySQL

Para instalar basta iniciar dois terminais, em ambos, entre na pasta do projeto. No primeiro, entre na pasta do backend com `cd Backend`, após isso execute `npm install` ou `yarn`, e, por fim, basta dar `npm start` ou `yarn start`, porém para que tudo funcione, é necessário configurar o banco de dados e as variáveis de ambientes, por isso crie um banco de dados mysql, preencha as variáveis de ambiente que dizem ao banco de dados, e rode no terminal `npx knex migrate:latest` ou `yarn knex migrate:latest`, com isso o banco será configurado, em relação a variável de ambiente `SECRET_KEY`, seria interessante que essa variável fosse um hash aleatório, por isso rode `node generateHash.js`, onde va printar no terminal um hash aleatório, você pode usar ele nessa variável, com isso, o `yarn start` vai funcionar totalmente. Depois disso, vá para o segundo terminal e abra entre na pasta Mobal com `cd Mobal`, depois instale as depedencias com `yarn`, e rode `yarn start`, isso abrirá uma página web com o código QR que você deverá ler pelo seu celular com o aplicativo do expo. Com isso, deverá funcionar normalmente o seu app mobile.

## Como funciona

O sistema foi feito para que os usuários tenham a capacidade de utilizar o whatsapp como um sistema de comprar, dessa maneira, um usuário mandaria mensagem de whatsapp, a partir do momento que o usuário manda a mensagem, ele vai ser cadastrado no nosso sistema.

Depois de cadastrado, o usuário vai poder criar se carrinho de compras, dessa forma ele pode adicionar produtos ao carrinho. Essa parte do sistema funciona por meio de uma interação da api da Zenvia, com a nossa api. Porém, para que funcionários sejam capazes de criar produtos e mais, foi feito um app mobile ao quais apenas os funcionarios teria acesso.