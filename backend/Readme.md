# Proyecto CalendarApp Backend

## Variables de entorno

No olvides generar las variables de entorno del proyecto, existen 3 bifurcaciones para las variables de entorno:

- .env
- .env.development
- .env.production
- .env.testing

en el archivo de declaraciones de variables de entorno principal (.env) se debe especificar el ambiente de desarrollo actual, solo se puede especificar 3 tipos diferentes de ambiente, dependiendo del ambiente, la aplicacion escogera el archivo (.env.***) correspondiente como se indica a continuacion.

```
NODE_ENV= development | production | testing
APP_NAME= NombreDeLaApp
SECRET_JWT= semillaParaToken
```



Es asi como se deben declarar las variables de entorno hijas, genera estas mismas variables para cada archivo (.env.***) con sus valores correspondientes.

```
PORT= 3000
DB_USER= UsuarioBaseDeDatos
DB_PASSWORD= ContraseñaBaseDeDatos
DB_NAME= NombreBaseDeDatos
DB_URL=mongodb://localhost:27017/calendarappDev
```
---

**Nota:** Para simplificar el trabajo de definicion de las variables de entorno, se incluyo en el proyecto 2 archivos.

- env.backup
- env.environment.backup

Por favor has una copia de estos archivos y cambia el nombre de acuerdo al ambiente correspondiente, como se indica en el ejemplo.

```
cp env.backup .env &&
cp env.environment.backup .env.development && 
cp env.environment.backup .env.production && 
cp env.environment.backup .env.testing
```

## Ejecucion del proyecto

Una vez definidas las variables de entorno, el siguiente paso es instalar los modulos de node especificados en el archivo package.json.
```
npm install 
```

una vez temine debes inicializar el entorno de typescript.


```
npm run init
```
## Rutas relativas

**Opcional:**
El proyecto esta configurado para inluir rutas relativas, sin embargo son opcionales, si deseas incluirlas deberas especificarlas en el archivo tsconfig.json ubicado en la raíz, estas rutas no daran problemas al trabajar en el ambiente de desarrollo pero si cuando se compile el proyecto a produccion, pero no te preocupes, pensamos en todo, declara las rutas en los archivos tsconfig.json y package.json como se muestra en el ejemplo.

**tsconfig.json**

```
"moduleResolution": "node", 
"baseUrl": "./src",
"paths": {
    "@app":       ["./app/app"],
    "@server/*":  ["./app/server/*"],
    "@config/*":  ["./app/config/*"]
}, 
```

**package.json**

```
"_moduleAliases": {
    "@app":       "./app/app",
    "@server/*":  "./app/server/*",
    "@config/*":  "./app/config/*"
}
```