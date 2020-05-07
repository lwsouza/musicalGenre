# Musical Genre
API que através de uma cidade informada, consome uma API que fornece a temperatura da cidade e informa uma playlist do Spotify baseado na temperado retornada.

### Requisitos
* Docker
* Docker Compose

## Executando o Docker
Após o "git clone" devemos executar o seguinte comando na raiz do projeto:

> docker-compose build app

Logo após finalizar o comando acima, execute:

> docker-compose up -d

Será gerado o container, chamado musicalgenre.

Após a construção da imagem e o container estiver operando, podemos acessar a API através do endereço http://localhost:3000 .

Caso deseje parar a execução do container, execute:

> docker-compose stop

## Executando sem o Docker
Para execução do código, segue o passo a passo:

* Executar npm install
* Executar npm start

### Rotas disponíveis 

* Realizar a requisição com get
    * /cidade/{city}
    * /estatistica
