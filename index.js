// COMO CREAR UN REPOSITORIO
/*
1- Abrir terminal y escribir git init
2- Escribir git add .
3- Escribir git commit -m "Mensaje", con esto ya tenemos el primer repositorio creado.
4- Crear el repositorio en github.
5- Copiar los comandos de "or push..." y pegarlos en la terminal de vscode.
6- Listo, ya se creó nuestra primera rama (main) con nuestro primer commit.
    en este paso puede pedir login. A mi me pidió vincular github con git y listo.
7- Ahora hay que implementar las reglas de gitflow.
    La onda es no tener todo nuestro codigo en la rama main, ya que es la que ve el usuario final.
    Por eso creamos una nueva rama, la de desarrollo:
    git checkout -b develop
    darle click en publicar y sincronizar (barra de abajo, icono de nubecita) o sino en la terminal escribir:
    git push -u origin develop
8- Para no saturar una rama de commits, ya que por cada cambio en una funcionalidad de una app se debe hacer un commit, se sugiere
    crear una rama especifica para una funcionalidad especifica. Ej:
    git checkout -b feature/say-hello
    feature =  funcionalidad/say-hello = le decimos de que va a tratar esa funcionalidad.
9- Para probar lo anterior, creamos una funcion sayHello.
*/
function sayHello() {
    console.log("Hola chancho con cola")
}
/*
10- git add .
    git commit -m "feat: se ha agregado la funcion sayHello"
    git push
y verificamos si se subieron los cambios en github. Con esto, podemos movernos entre ramas, viendo solo actualizado lo de la rama
modificada. Ahora para subirlo a la rama principal (develop) hacemos un merge.
11- MERGE: git merge --no-ff feature/say-hello (el flag --no-ff es para que se sigan viendo los cambios pasados y no se pisen)
12- Crear una nueva rama a modo de practica y prueba de lo mismo, repitiendo los pasos (crearla, subirla, git add y git commit...)
*/
function sayBye() {
    console.log("ata luego colegaa")
}