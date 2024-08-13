
const consultarDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const datoID = document.getElementById("post-data");

        datoID.innerHTML = '';
        const listado = document.createElement('ul');

        datos.forEach(post => {
            const lista = document.createElement('li');
            lista.innerHTML = `<strong>${post.title}</strong> <br> 
                                    ${post.body} <br>`;
            listado.appendChild(lista);
        });

        datoID.appendChild(listado);

    } catch (error) {
        console.error('Error al obtener los posts:', error);
    }
};

function getPosts() {
    consultarDatos();
};