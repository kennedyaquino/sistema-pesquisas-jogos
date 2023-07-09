# Pesquisa de games mais jogados

O projeto consiste em mostrar os games mais jogados entre as plataformas Playstation, Xbox e PC

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

```
Java
```
```
Maven
```
```
NodeJs
```
```
NPM
```
```
Expo
```

### 🔧 Instalação

Clone este repositório
```
git clone https://github.com/kennedyaquino/sds1.git
```

Altere o profile para test no arquivo application.properties na pasta resource:
```
cd backend/src/main/resources/application.properties
```

```
spring.profiles.active=test
```

Execute o servidor

Terminal na pasta raiz:
```
mvn spring-boot:run
```
Ou pela IDE de sua preferência

Instale as dependências web
```
cd/front-web
```
```
npm install
```
Execute o servidor web

```
npm start
```

Instale as dependências mobile
```
cd/front-mobile
```
```
npm install
```
Execute o servidor mobile

```
npm start
```
Será gerado um qrCode no terminal onde pode apontar a camera de seu smartphone com aplicativo expo,
ou de sua preferência executar no emulador.


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Spring Boot](https://spring.io/projects/spring-boot)
* [Maven](https://maven.apache.org/)
* [React](https://react.dev/)
* [Expo](https://expo.dev/) 

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/kennedyaquino/sds1/blob/master/LICENSE) para detalhes.
