import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Creado etiqueta h1 en html rafa');
    const h1 = document.createElement('h1');
    h1.innerText=`Hola, ${nombre}`;

    document.body.append(h1);
}