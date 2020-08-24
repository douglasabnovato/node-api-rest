## NodeJS e API

#### Atualização: 03 de novembro de 2019 - 13:59
#### Criação: 08 de fevereiro de 2019
#### Prática : @douglasabnovato

## Ferramentas : 

![Rocketseat](/images/logo-rocketseat.png)
![Docker](/images/logo-docker.png)
![Insomnia](/images/logo-insomnia.jpg)
![Robo 3T](/images/logo-robo3t.png)
![Nodejs](/images/logo-nodejs.png)
![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)

### 1. O que é API Rest e NodeJS

- [x] 1.1. Javascript para Frond-end, com ReactJS e React Native, e agora para Backend com NodeJS.
- [x] 1.2. API Rest : separa o back-end, servidor e banco de dados, do frond-end.
- [x] 1.3. **NodeJS**, **MongoDB**, **Express**

### 2. Instalando NodeJS

- [x] 2.1. Instalar o NodeJS a partir do site oficial: LTS 12.18.3
- [x] 2.2. Instalar o NPM, um constrole de versão: v6.14.6
- [x] 2.3. `chocolatey`, `node -v`, `npm -v`

### 3. Criando a estrtura

- [x] 3.1. Objetivo: desenvolver a api
- [x] 3.2. `mkdir node-api`, `cd node-api`, 
- [x] 3.3. `npm init -y`: package.json : guardar as informações das depências
- [x] 3.4. `npm install express`

### 4. Criando a primeira rota

- [x] 4.1. Utilizando o **express**
- [x] 4.2. criar o arquivo `server.js`
- [x] 4.3. executar `node server.js`
- [x] 4.4. `http://localhost:3001/`
- [x] 4.5. código teste para o servidor
````javascript
const express = require('express');

const app = express();
app.get("/", (req, res) => {
    res.send("Hello Rocketseat");
});

app.listen(3001);
````

### 5. Utilizando Nodemon
- [x] 5.1. `npm install -D nodemon`: instalar o Nodemon no ambiente de desenvolvimento
- [x] 5.2. ao invés de `node server.js`, usar o `npm run dev` 
- [x] 5.3. reinicializar o servidor após alguma alteração
- [x] 5.4. abre : `http://localhost:3001/`
- [x] 5.5. package.json/dependencies:
```json
"dependencies": {
    "express": "^4.16.4",
    "mongoose": "^5.4.9",
    "mongose": "0.0.2-security"
  }
```

### 6. Instalando MongoDB

**Docker Quickstar Terminal**
- [x] 6.1. Docker: máquina de conteinerização
- [x] 6.2.1. **ATENÇÃO**: no `windows 10 home` não possui `Hyper -v`, por isso, problema com virtualização.
- [x] 6.2.2. utilizar a máquina virtual , Docker tools, prompt
- [x] 6.2.3. utilizando virtualbox + docker tools : Docker Quickstart Terminal
- [x] 6.2.3.1. `docker`: visualizar todos comandos
- [x] 6.2.3.2. `docker pull mongo`: baixar o mongodb
- [x] 6.2.3.3. `docker run --name mongodbrs -p 27017:27017 -d mongo`
- [x] 6.2.3.4. `docker ps`: exibe quais estão conectados.
- [x] 6.3. acessar no navegador `http://localhost:27017/`, se estiver rodando, retorna a mensagem : `It looks like you are trying to access MongoDB over HTTP on the native driver port.`
- [x] 6.4. `docker ps -a` : saber imagens que estão pausadas
- [x] 6.5. `docker start mongodb` : ou mongodbrs : nome das minhas conexões

**Robot 3T**
- [x] 6.6. Realizar testes para verificar as criações de db: abrir programa `Robot 3T`
- [x] 6.6.1. Create para criar um conexão: localhost, porta 27017, nome "DockerDB"
- [x] 6.6.2. Na janela MongoDB Connections do Robot 3T, para criar nova conexão: `name \ docker` e `address \ localhost: 27017`, ou conectar com a já criada: `docker`. 
- [x] 6.6.3. Duas bases de dados: admin e local 

### 7. Conectando Database

- [x] 7.1. Instalar a dependência do mongodb: `npm install mongoose`
- [x] 7.2. Código no server.js
````javascript
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
````
- [x] 7.3. O mongoose permite usar somente javascript para a criação do db, ao invés de usar comandos SQL.
- [x] 7.4. Para verificar se está conectado corretamente, o servidor não está apresentando nenhum erro no terminal.

### 8. Criando Model de produto
- [x] 8.1. O Model na arquitetura MVC representa a estrutura de dados no nosso db.
- [x] 8.2. Model de produto do nosso www.producthunt.com
- [x] 8.3. Estrutura de pastas: src/models/Product.js
- [x] 8.4. Construindo nosso model em Product.js
- [x] 8.5. Dar um require: `require('./src/models/Product');` no server.js
- [x] 8.6. A biblioteca require-dir assim, não há necessidade de criar manualmente esse require em todos os models do projeto. Porque teremos muitos models que precisarão de require. 
- [x] 8.7. require-dir: `require('./src/models/');` 
- [x] 8.8. require-dir : `npm install require-dir`

### 9. Reestruturação de arquivos
- organização, criação, atualização, deleção e listagem de cada produto.
- criar `/src/routes.js`
- funcinando `http://localhost:3001/api`
- criar `/src/controllers/ProductController.js`
- acesso no link : `http://localhost:3001/api/products`

### 10. Utilizando Insomnia
- Insomnia : workspace : `starter-nodejs`
- new request - Index - GET : `http://localhost:3001/api/products`
- Manage Environments - base_url : `http://localhost:3001/api`

### 11. Criaçaõ de registro
- server.js : `app.use(express.json());`
- insomnia - new request - Create - Post - Json
````json
{
	"title":"ReactJS",
	"description":"Biblioteca para criar aplicações interativas com Javascript",
	"url":"http://github.com/facebook/react"
}
````

### 12. CRUD
- index : listagem : insomnia - Index - GET
- show : exibição : insomnia - Show - GET
- store : criação : insomnia - Create - POST
- update : atualização : insomnia - Update - PUT
- destroy : deleção : insomnia - Delete - DELETE

### 13. Paginação de Lista
- listagem dos objetos
- mongoose paginate : `npm install mongoose-paginate`
- insomnia - Index - `{{ base_url  }}/products?page=2` : retorna a segunda página de objetos 

### 14. Adicionando CORS
- permitir acessar essa API de outros endereços
- permitir acesso por outros domínios
- CORS : `npm install cors`

:. Do curso `NodeJS`. <br/>
Por Diego Fernandes - Rocketseat : https://rocketseat.com.br/