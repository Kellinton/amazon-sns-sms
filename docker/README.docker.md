## Como Rodar a Aplicação com Docker

- [Instale o Docker](https://www.docker.com/get-started)

1. **Clone o Repositório**

Primeiro, clone o repositório em seu diretório local:

```bash
git clone https://github.com/Kellinton/amazon-sns-sms.git
cd amazon-sns-sms
```

2. **Crie o Arquivo .env**

Crie um arquivo .env na raiz do projeto e preencha os campos com as credenciais:

```bash
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
```

3. **Rodando a Aplicação com Docker**
Execute os seguintes comandos para construir e rodar o contêiner Docker:

```bash
docker build -t sns-sms-app .
docker run --env-file .env -p 3000:3000 sns-sms-app
```

A aplicação estará disponível na URL:

```bash
http://localhost:3000
```