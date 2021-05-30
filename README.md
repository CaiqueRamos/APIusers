# Back-End
NodeJs + Mysql   

## Como rodar na sua maquina:

Primeiramente é necessario:
Mysql, Node, Git, Insomnia (Opcional)

```shell
git clone https://github.com/CaiqueRamos/APIusers.git
cd node-mysql-sample
npm install
```

Altere o arquivo: `./src/models/sequilize.js` 
E mude a string:
```
mysql://{DB_USER}:{DB_USER}@{DB_HOST}:{DB_PORT}/{DB_DATABA}
```

Ex: da minha:
```
mysql://root:@localhost:3306/nails
```

### Subir
Após instalar todas as dep, simplesmente rode: 
```shell
npm run dev
```

### Deploy 
```shell
npm run start
```

## Para teste estou utilizando o Insomnia
Insomnia == Manipulação de HTTP 
Enviar o Form> POST 
Requisitar uma pagina> GET


## SQL 

```sql
CREATE DATABASE nails; -- Cria o banco de Dados
USE nails; -- Set como banco
DROP TABLE users;
DROP TABLE locations;
-- Cria uma tabela de Usuarios 
CREATE TABLE users (
	id INT(11) PRIMARY KEY AUTO_INCREMENT, -- Chave primaria (Não pode se repetir, e possui auto incremento, EX: 1,2,3..... )
	username VARCHAR(250) NOT NULL, -- not null obriga a preencher algo
	email VARCHAR(250) NOT NULL UNIQUE, -- unique garante a Unicdade
  password VARCHAR(250) NOT NULL,
	phone VARCHAR(20)
)ENGINE=INNODB
;
-- Insere um usuario
INSERT users (username, email, password) VALUES ('caique', 'caiqueramos@gmail.com', '12345'); -- Auto_Increment vai adicionar = 1  no usr_id
-- Insere um usuario
INSERT users (username, email, password) VALUES ('teste', 'teste@gmail.com', '12345'); -- Auto_Increment vai adicionar = 2  no usr_id
SELECT * FROM users; -- Lista todos os Usuarios
;
DROP TABLE locations -- Apaga tabela e conteudo (estrutura + dados)
;
CREATE TABLE locations (
	id INT(8) PRIMARY KEY AUTO_INCREMENT,
	zip_code CHAR(8) NOT NULL,
	street VARCHAR(250) NOT NULL,
	street_number VARCHAR(50) NOT NULL,
	neighborhood VARCHAR(250),
	city VARCHAR(250),
	state CHAR(2) NOT NULL,	
	usr_id INT(11) NOT NULL,
	lat FLOAT(10, 8),
	lng FLOAT(11, 8),	
  KEY `idx_usr_id` (`usr_id`),
	CONSTRAINT `fk_locations_users` FOREIGN KEY (`usr_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
);