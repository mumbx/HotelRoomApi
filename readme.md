
# Hotel Room RESTful API

API RESTful criada em NodeJS que fornece serviços para quartos de Hotel 
### 💾 Programas necessários

![git](https://i.ibb.co/nkKKP9y/git-icon-icon.png)
![Node](https://i.ibb.co/myprnzm/code-nodejs-logo-development-icon-icon.png)

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

Após baixar os programas necessários, clone o repositório executando comando abaixo no git

```git
   $ git clone https://github.com/mumbx/HotelRoomApi
```

### Estrutura do projeto

![estrutura](https://i.ibb.co/51Wy5g0/ssss.jpg)

## Quer usar em seu projeto? Siga os passos abaixo 

```bash
1️⃣ Faça o download das dependências do projeto executando o comando $ npm install
2️⃣ Com o NodeJS, execute o arquivo create.js para criar o Database
3️⃣ No arquivo index.js, na variavel portal, escolha a porta local de seu serviço
4️⃣ Para executar o servidor execute o comando $ npm run start 
```

### ROTAS PADRÃO DO SERVIÇO

#### GET - /room

Retorna todos quartos cadastrados

![getRooom](https://i.ibb.co/VDD8KTh/get.jpg)

#### GET - /room/**{id}**

Retorna 1 quarto com base no id passada como parâmetro na URL
![getRoomById](https://i.ibb.co/cTMW7HS/getbyid.jpg)

#### POST - /room/create

Recebe um objeto/json informando o número do quarto, se está ocupado e o tipo do quarto

![createRoom](https://i.ibb.co/c3qq6Ft/post.jpg)

#### DELETE - /room/delete/**{id}**

Recebe um ID como parametro na URL e exclui da base de dados, o quarto referente aquele ID
Retorna um JSON informando se foi deletado ou teve erro

```javascript
    {
    "Message": "Room Deleted"
    }
```
#### PUT - /room/update/**{id}**

Recebe na URL o ID do quarto que você deseja atualizar e no corpo um objeto/json 
O Objeto no corpo pode conter 1 ou mais valores a serem atualizados
Exemplo do objeto:

```javascript
{
    "roomNumber":200,
    "isOcupied":0,
    "roomType":"economic"	
}
```

ou

```javascript
{
    "roomNumber":200,    
    "roomType":"economic"	
}
```

Retorna quantos campos foram atualizados

```javascript

{
  "Changes": 3
}

```
