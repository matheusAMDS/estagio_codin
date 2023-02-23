# estagio_codin

## Tecnologias
- Banco de dados: MySQL
- Linguagem de programação para backend e frontend: Node.js + TypeScript
- Framework para construção da solução backend: Nestjs + Prisma (ORM)
- Framework para construção da solução frontend: Svelte.kit (Svelte.js)

## Banco de dados
Para configurar o acesso, deve-se entrar na pasta `api` e
configurar o arquivo `.env` que contém a URL de acesso do banco de dados:
```bash
DATABASE_URL=<sgbd>://<user>:<password>@<host>:<port>/<db>?schema=public
```
## Backend
Ainda dentro desse arquivo .env, configure a variável `JWT_SECRET_KEY` com um valor aleartório (ou algum hash criptográfico). Esse valor refere-se
à chave secreta para a geração de tokens JWT para autenticação de usuários na API.

Após, execute o seguinte comando para instalar as dependências da API:
```bash
$ npm install
```
Para executar as migrations:
```bash
$ npx prisma migrate deploy
``` 
E para popular o banco de dados:
```bash
$ npx prisma db seed
```
Apos tudo isso, para iniciar a API (na porta 3000) execute:
```bash
$ npm run start:dev
```
## Frontend
Para executar o frontend, basta apenas instalar as dependências e executar o projeto
```bash
$ npm install
$ npm run dev
```
