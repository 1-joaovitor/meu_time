## `Título`
Meu time

## Descrição do projeto

Aplicação com propósito de adquirir informações sobre os times de futebol de todo o mundo



## Instalação

bash
$ npm install || yarn add



## Rodar aplicação
bash

$ npm start || yarn start

## Efeturar login
utilize este email e senha e obterá acesso: email: "sjoaovitor@gmailcom",senha: "123456".
qualuqer outro email e senha não conseguirá acesso.       
O usuário possui um cadastro que ao informar email e senha corretamente é retornado uma key de acesso que logo em seguida é inseriada nas requisições de forma dinâmica

## Funcionalidades

Através de filtros o usuário determina a informação que irá ver 
1- escolhe o país de origem
2- escolhe a liga e a temporada desse determinado país
3- escolhe o time
4-visualisa as informações do time na temporada escolhida
5-clica no botão 'Exibir jogadores' ao qual será apresentado todos os jogadores da equipe
6-logo a baixo verá também um gráfico que expressa o intervalo de tempo que a equipe marcou mais gols durante o jogo


# Teste unitários
$ npm test || npx jest

### `Tecnologias utilizadas`
1- para validação do form foi usada o yup
2- styled-component para criar um estilo global
3- react-router-dom para manipulação das rotas
4- axios para fazer as requisições de maneira rápida e limpa
5- react-apexcharts para o desenvolvimento do gráfico
7- mui/material para os componentes
8- react-hot-toast para interação com usuário ser dinâmica e instrutiva
9- para desenvolver um form simples rápido e prático foi usada a react-hook-form
10- optei por usar o context do próprio react para manipular o login
11- foi armazenado no localStorage o usuário para que ele permaneça logado na página










