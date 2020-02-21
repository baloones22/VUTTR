# VUTTR
### Very Userful Tools to Remember. 
A aplicação é um simples repositório para gerenciar ferramentas 
com seus respectivos nomes, links, descrições e tags.
### Principais Plugins Utilizados
+ node
+ yarn
+ express
+ Sequelize
+ Docker



## Instruções
Clone git

Antes de executar a primeira vez:
```js
yarn install
```
```js
sudo docker run -p 5432:5432 -e "POSTGRES_PASSWORD=postgres" -v (!pasta do banco):/var/lib/postgresql/data -d postgres
```
Executar:
```js
yarn dev
```
Clone git

(caso de conflito com o postgres)
```js
sudo ss -nlp |grep 5432
sudo kill (id).
```
yarn sequelize db:migrate
yarn dev
Com o Insomnia use 
get http://localhost:3000/tools == index
post http://localhost:3000/tools == store
get http://localhost:3000/tools/:id == show id
delete http://localhost:3000/tools/:id == delete id
get http://localhost:3000/tools?tag=toolsTag = show toolsTag
