
# API Contact Flow

A **API Contact Flow** é uma API desenvolvida para gerenciar formulários de contato em sites. Ela recebe informações enviadas pelos usuários, como nome completo, assunto, e-mail e mensagem, e as armazena de forma segura no **Firebase Realtime Database**. A API é desenvolvida em **Node.js** utilizando o framework **Express** e inclui várias medidas de segurança, como **Helmet** e **express-rate-limit**, além de validação de dados com **Joi**.

---

## 🚀 **Tecnologias Usadas**

- **Node.js**: Plataforma de execução para JavaScript no lado do servidor.
- **Express**: Framework minimalista para Node.js, utilizado para gerenciar rotas e requisições HTTP.
- **Firebase**: Plataforma para gerenciamento de dados em tempo real, usada para armazenar as informações do formulário de contato.
- **Helmet**: Biblioteca que ajuda a proteger a API contra vulnerabilidades da web.
- **express-rate-limit**: Middleware que limita o número de requisições para prevenir abusos e ataques DDoS.
- **Joi**: Biblioteca para validação de dados de entrada.
- **dotenv**: Para carregar variáveis de ambiente de um arquivo `.env`.

---

## 📦 **Instalação**

### 1. **Clone o Repositório**

Para começar, clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/RafaelSilvaIna/api-contact-flow.git
cd api-contact-flow
```

### 2. **Instale as Dependências**

Instale todas as dependências necessárias com o comando:

```bash
npm install
```

### 3. **Configuração do Firebase**

Você precisará configurar o Firebase para que a API possa se conectar ao seu Realtime Database. Siga os passos abaixo:

- Acesse o [Console do Firebase](https://console.firebase.google.com/).
- Crie um novo projeto ou use um projeto existente.
- Vá para **Configurações do Projeto** > **Contas de Serviço** e baixe o arquivo de credenciais JSON.

Renomeie esse arquivo para `firebase-config.json` e coloque-o no diretório raiz do projeto.

### 4. **Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto para armazenar a configuração do Firebase. Exemplo:

```bash
FIREBASE_CONFIG=path_to_your_firebase_config.json
```

---

## 🖥️ **Rodando a API Localmente**

Com as dependências instaladas e o arquivo de configuração do Firebase configurado, você pode rodar a API localmente usando o comando:

```bash
npm start
```

A API será executada na porta `3000` por padrão. Você pode acessar a API localmente em `http://localhost:3000`.

---

## 📝 **Endpoints da API**

### `POST /submit-contact`

Recebe as informações do formulário de contato e as armazena no Firebase Realtime Database.

#### Exemplo de Requisição

```json
{
  "name": "John Doe",
  "subject": "Question about the API",
  "email": "johndoe@example.com",
  "message": "Can you provide more details?"
}
```

#### Resposta Esperada

Se a requisição for bem-sucedida, a resposta será:

```json
{
  "status": "success",
  "message": "Contact information submitted successfully!"
}
```

Em caso de erro, como dados ausentes ou inválidos:

```json
{
  "error": "Todos os campos são obrigatórios."
}
```

---

## 🔒 **Segurança**

A API foi configurada com várias camadas de segurança:

- **Helmet**: Protege contra vulnerabilidades comuns da web, como **Clickjacking**, **XSS**, **CSRF**, e mais.
- **express-rate-limit**: Limita o número de requisições que podem ser feitas por um único IP em um intervalo de tempo.
- **Joi**: Valida os dados enviados pelo usuário, garantindo que todos os campos obrigatórios sejam preenchidos.

### Configurações de Segurança

- **Helmet** é configurado no arquivo `index.js` para adicionar cabeçalhos HTTP de segurança.
- **Limitação de Taxa**: A API limita o número de requisições que podem ser feitas por um único IP em um intervalo de tempo.

---

## ⚙️ **Estrutura do Projeto**

A estrutura do projeto é a seguinte:

```
api-contact-flow/
├── node_modules/             # Dependências do Node.js
├── .gitignore                # Ignora arquivos não necessários para o git
├── firebase-config.json      # Credenciais do Firebase
├── package.json              # Informações do projeto e dependências
├── package-lock.json         # Registro de dependências
├── .env                      # Configurações de variáveis de ambiente
├── index.js                  # Arquivo principal da API
├── README.md                 # Este arquivo
```

---

## 💼 **Hospedando no Glitch**

Se você deseja hospedar a API no Glitch, basta fazer o seguinte:

1. **Crie um novo projeto** no Glitch ou importe seu repositório do GitHub.
2. **Configure as variáveis de ambiente** no Glitch, em **Tools** > **Secrets**, e adicione a chave `FIREBASE_CONFIG` com o conteúdo do seu arquivo de credenciais Firebase.
3. **Inicie o projeto** no Glitch. A URL pública será gerada automaticamente, como: `https://seu-nome-do-projeto.glitch.me`.

---

## 🚨 **Considerações Finais**

- **Segurança**: Certifique-se de não expor dados sensíveis no código fonte, especialmente as credenciais do Firebase.
- **Limitações de Uso**: O Firebase Realtime Database tem limites de uso gratuitos. Se o número de requisições for muito alto, considere configurar um plano pago ou otimizar o uso da API.
- **Validação de Dados**: A API utiliza **Joi** para garantir que os dados enviados sejam válidos, evitando a inserção de dados errados no banco.

---

## 📄 **Licença**

Este projeto é licenciado sob a [MIT License](LICENSE).

---

## 🧑‍💻 **Contribuindo**

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b minha-nova-feature`).
3. Faça as modificações e adicione testes.
4. Faça commit das alterações (`git commit -am 'Adiciona nova funcionalidade'`).
5. Envie para o repositório (`git push origin minha-nova-feature`).
6. Abra um Pull Request.

---

### Links Úteis:

- [Firebase Documentation](https://firebase.google.com/docs)
- [Express Documentation](https://expressjs.com/)
- [Glitch Documentation](https://glitch.com/docs/)
