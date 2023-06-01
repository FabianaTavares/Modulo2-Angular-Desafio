# Descrição Desafio de Angular - Despesas

Bootcamp FrontEnd - IGTI 2020

![GitHub Workflow Status](https://github.com/FabianaTavares/Modulo2-Angular-Desafio/workflows/Gerador%20de%20CHANGELOG/badge.svg)
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/FabianaTavares/Modulo2-Angular-Desafio?color=blue)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Observação

Apesar de o curso fornecer o codigo fonte original aos alunos, procurei deixar o meu codigo, exibindo assim erros e acertos, coisas a melhorar, acho que transparência é um ponto importantíssimo para o profissional.

## Ambiente de Desenvolvimento

### Frontend & Backend

1. npm install para instalar as dependencias do projeto.
2. instalar o json-server para simular o backend

```
npm install -g json-server
```

2. para rodar o json server:

```
json-server --watch despesas.json
```

## Ambiente de Produção

Para visualizar o projeto rodando, basta acessar o [link do desafio!](https://fabi-igti-angular-desafio-2.web.app/)
OBS: Ainda estou estudando como o firebase pode ler o json backend, é um desafio novo.

## Docker Hub

Imagem disponível no docker hub (fase de aprendizado) [link do desafio no dockerhub!](https://hub.docker.com/r/fabianatavares/angular-despesas)

## Objetivos do Trabalho Prático

Exercitar os seguintes conceitos trabalhados no Módulo:

- Criar componentes, templates e pipes.
- Comunicar com o Back End.
- Definir roteamento.
- Usar serviços.
- Usar a biblioteca Angular Material.

## Enunciado

Utilizando o Angular, construa uma aplicação para exibir as despesas dos senadores no ano de 2019, conforme base de dados fornecida.

## Atividades

Os alunos deverão desempenhar as seguintes atividades:

1. Utilize o pacote json-server para criar um serviço Back End baseado no arquivo
   despesas.json, fornecido junto com este enunciado. O Back End irá prover as
   seguintes operações:
1. GET /senadores retorna com um array de senadores, contendo os campos
   id (number) e nomeSenador (string).
1. GET /despesasSenadores/:id retorna um objeto contendo os campo id e
   nomeSenador, além do campo despesas, do tipo array. Cada objeto em
   despesas contém:
   a. tipo: number;
   b. fornec: string;
   c. ano: number;
   d. mes: number;
   e. dia: number;
   f. valor: number;
1. Crie uma aplicação Angular denominada despesas, contendo duas telas, cada uma
   com sua rota:
1. Lista de senadores (rota /senadores).
1. Despesas de um senador (rota /senadores/:id).
1. A tela Lista de senadores deve exibir os senadores, conforme dados retornados pela
   chamada GET /senadores do Back End. Cada item da lista leva à tela Despesas de
   um senador.
1. A tela Despesas de um senador deve exibir o nome do senador e as seguintes
   informações, com base nos dados obtidos no Back End pela chamada GET
   /despesasSenadores/id:
   a. Tabela com o resumo das despesas, contendo o valor total gasto com cada
   tipo de despesa, além do valor total de todas as despesas. Estas
   informações não são fornecidas diretamente pelo Back End, elas precisam
   ser calculadas com base no array despesas.
   b. Tabela com a discriminação de cada despesa.
1. Os tipos de despesa são identificados por um número de 1 a 7:
   a. Aluguel de imóveis e despesas concernentes a eles.
   b. Divulgação da atividade parlamentar.
   c. Aquisição de material de consumo para uso no escritório.
   d. Passagens aéreas, aquáticas e terrestres nacionais.
   e. Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e
   outros serviços.
   f. Locomoção, hospedagem, alimentação e combustíveis.
   g. Serviços de Segurança Privada.
1. Os valores monetários devem sempre ser exibidos com duas casas decimais (use
   pipes).
1. Utilize os componentes do Angular Material para criar a interface de sua aplicação.

## Dicas e Sugestões

1. Nas interfaces demonstradas, eu utilizei os seguintes componentes do Angular
   Material: Toolbar, List e Table.
2. Defina um pipe para transformar o código do tipo em sua descrição.
3. Lembre-se de incluir os dados de localização para português na aplicação, adicione o seguinte código no app.module.ts:

Além disso, inclua o provider { provide: LOCALE_ID, useValue: 'pt' } 4. O json-server pode ser instalado com o comando npm install -g json-server.
Para executar, use o comando json-server --watch nomeDoArquivo.json.
