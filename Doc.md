# Documentação sobre a Arquitetura

O serviço foi desenvolvido utilizando a arquitetura orientada a serviços com requisições HTTP em uma API Rest, como uma aplicação monolítica e contendo 3 rotas.

OBS.: Foi desenvolvido em uma aplicação monolítica por ser uma aplicação de pequeno porte.

### A estrutura de pastas do projeto

* app
    * controllers
    * routes
* logs

app: É a pasta onde fica armazenada todo o código fonte aplicação, exceto o app.js que fica na raiz do projeto. (OBS.: O app.js é onde se inicia a aplicação)

controllers: Está pasta é onde acontece toda a lógica que é realizada para fazer a conexão com outra API ou tipo de serviço.

routes: Está pasta contém todas as rotas da aplicação.

logs: Está pasta é onde fica armazenados os logs, no caso dessa aplicação é onde fica armazenado o arquivo para geração das estatísticas.

### Raiz do projeto

Na raiz do projeto, contém os seguintes arquivos:

* .gitignore
* app.js
* Doc.md
* docker-compose.yml
* Dockerfile
* package.json
* README.md

.gitignore: Pasta a ser ignorada ao enviar para o repositório.

app.js: Arquivo onde inicia toda a aplicação.

Doc.md: Explicação da arquitetura.

docker-compose.yml: Deixamos o que é diferente para cada container.

Dockerfile: Deixamos o que é comum entre os containers.

package.json: Arquivo onde contém as informações da aplicação e aponta cada pacote que foi utilizado.

README.md: Apresentação inicial do projeto e explicação de como executar.


### Explicando o Dockerfile

**FROM:** Informa qual imagem vamos utilizar no nosso container, nessa vamos utilizar do próprio NodeJS contendo a sua ultima versão.

**RUN:** É utilizado sempre que queremos executar um comando dentro do container, criar uma pasta, baixar as dependências do NPM, etc…

**WORKDIR:** Define o diretório de trabalho onde vamos manter nossa aplicação, a partir da declaração dele os comandos RUN e CMD serão executados no caminho definido através deste comando.

**COPY:** Serve para copiarmos nossas arquivos, dessa forma copiamos o nosso código para o nosso WORKDIR.

### Explicando o docker-compose.yml

**version** serve apenas para dizermos qual a versão do Docker Compose estamos utilizando.

**services** são os nossos containers, app é nossa aplicação em NodeJS.

**container_name** serve para darmos um nome ao nosso container, um alias.

**build** definimos onde se encontra o Dockerfile do container.

**ports** colocamos as portas que queremos expor do nosso container, primeiro vem a porta do nosso container e depois da própria máquina.

**command** dizemos qual comando vamos executar ao subir aquele serviço.