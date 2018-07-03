# Restaurant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

Caso precise atualizar para a versão 6.0

ng update @angular/cli

## Development server

- To run and compile the server (as long as the IDE does not run the tsconfig, json file), go into the backend directory and execute the following:
`tsc -w`

-To upload the api server, at the root of the project run:

`nodemon --watch backend --exec "ts-node" backend/dist/server.js` 

`Obs: nodemon must be globally installed` 


## Port 4200 or 3001
`sudo netstat -anp | grep ":4200"`
`kill -9 port`
`ps -xa | grep node `