## Passo a passo para iniciar o projeto:

**`npm init -y`** | Para gerar o package.json.

**`npm install typescript @types/node -D`** | Para instalar o typescrips no node.

**`npm install tsc`** | Para instalar o tsconfig.json no node.

**`npx tsx watch src/server.ts`** | Roda o comando que estiver no arquivo server.ts.
#
#### ORM:  
**`npm install prisma -D`**

**`npx prisma init --datasouce-provider SQLite`**

**`npx prisma migrate dev`** | Cria uma migration.

**`npx prisma studio`** | Abre a ferramenta com campus das tabelas da aplicação.
#
#### Para Rodar o projeto:

**`npm install`** | Para instalar as dependências do projeto.

**`.env`** | Crie um arquivo .env com a DATABASE_URL.

**`npx prisma migrate dev`** | Para aplicar as migrações do banco de dados.

**`npm run dev`** | Para que finalmente possa rodar o projeto.
