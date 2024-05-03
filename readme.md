### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [node](https://nodejs.org/en)
- [express](https://expressjs.com/pt-br/)
- [typescript](https://www.typescriptlang.org/)
- [mongo](https://www.mongodb.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [react](https://react.dev/)
- [vite](https://vitejs.dev/) 
- [pnpm](https://pnpm.io/pt/)

### Executando projeto 

Será necessário ter o [pnpm](https://pnpm.io/pt/) instalado, na sua máquina.

#### Back-end
Abra a pasta server no terminal, do seu computador.

Dentro da pasta server execute os seguintes comandos:

- Para instalar as dependências.  

```
$ pnpm install
```

- Para rodar o mongodb execute o comando:

```
$ docker compose up
```
- Execute a aplicação back-end:

```
$ pnpm run start
```

Após ter o mongodb e o back-end rodando, será necessário alimentar o banco de dados. Para isso, podemos utilizar:

- o endpoint /equipments/csv
- o aqruivo register.csv, que está armazenado em server/fixture

Será necessário executar uma requisição post, realizando o upload do arquivo. Nesse endpoint, é esperado que o arquivo seja enviado com o campo denominado 'csvFile'.

#### Front-end

Abra a pasta client no terminal, do seu computador.

Dentro da pasta client execute os seguintes comandos:

- Para instalar as dependências.  

```
$ pnpm install
```

- Execute a aplicação front-end:

```
$ pnpm run dev
```

- Acesse a rota 

/chart/one_month

Obs.: Será necessário criar novos registros no banco, do dia atual para conseguir visualizar o gráfico com o estado "24 hours".
