<p align="center"><img src="https://angular.io/assets/images/logos/angular/logo-nav@2x.png"></p>

## About the project

Restaurants Project created in Angular 6, for this project we simulated a backend using express, initializing a json 
file containing the fictitious data of the project.

#### Note: 
This project is under development.

### To initialize the project, clone the repository:
`git clone https://github.com/luisconcha/restaurant_ag6.git`


### Booting the backend server

##### To upload the api server, at the root of the project run

```sh 
    cd name_project
    
    nodemon --watch backend --exec "ts-node" backend/dist/server.js
    
    Note: nodemon must be globally installed
```

##### If you need to change the db.json file (as long as your development IDE does not run tsconfig, json automatically), go to the backend directory and do the following:
`tsc -w`



##### if ports 4200 or 3001 are busy
```sh 
    sudo netstat -anp | grep ":4200"  || sudo kill -9 `sudo lsof -t -i:4200`
    kill -9 port
    ps -xa | grep node 
```

### Initializing the frontEnd server

```sh 
    cd name_project
    
    ng serve
```

### Application build
```sh
- To generate with the development settings (does the buld with .map files):
    ng build
```
```sh
- To generate build for production (DO NOT build with .map files) :
    ng build --prod
```
```sh
- To generate build for production on shared server (the slash in the end is important)
    ng build --prod --bh=/nome_pasta/
```

### Simulate an application server (hSimpleHTTPServer must be installed)
```sh
- cd dist
    python -m SimpleHTTPServer 8000 
```

### Access data example
```sh
   email: luis@gmail.com
   password: 123456
   
   email: meg@gmail.com
   password: 123456 
   
    email: apolo@gmail.com
    password: 123456 
```
### screenshots
![3_inicial](https://user-images.githubusercontent.com/5189618/42416796-aac5e15c-824e-11e8-899f-e0144ab5b4d6.png)
![4_list](https://user-images.githubusercontent.com/5189618/42416795-aaa6c25e-824e-11e8-908b-860397fad317.png)
![4_detail](https://user-images.githubusercontent.com/5189618/42416793-aa674dc2-824e-11e8-87f7-5ceb48ae6da1.png)
![6_order](https://user-images.githubusercontent.com/5189618/42416792-aa3f345e-824e-11e8-9334-0d4a6d2ad898.png)
![5_chets](https://user-images.githubusercontent.com/5189618/42416794-aa880fee-824e-11e8-8f18-3e79a7d38809.png)
![2_postmant_orders](https://user-images.githubusercontent.com/5189618/42416797-aae97a18-824e-11e8-8b47-dbe8be001095.png)
![1_login_postman](https://user-images.githubusercontent.com/5189618/42416798-ab07b4b0-824e-11e8-8d64-e689738de7ec.png)



##### Credits
`Template link used for the project http://www.templatemonster.com/`
