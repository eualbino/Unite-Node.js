Passo a passo:

**`npm init -y`** | Para gerar o package.json

**`npm install typescript @types/node -D`** | Para instalar o typescrips no node

**`npx tsx watch src/server.ts`** | Roda o comando que estiver no arquivo server.ts

ORM:  **`npm install prisma -D`**

**`npx prisma init --datasouce-provider SQLite`**

**`npx prisma migrate dev`** | Cria uma migration

**`npx prisma studio`** | Abre a ferramenta com campus das tabelas da aplicação