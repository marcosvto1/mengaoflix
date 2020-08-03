import configs from '../config';

function create(jsonCategoria) {
    return fetch(`${configs.URL}/categorias`, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(jsonCategoria)
    }).then(
        async (response) => await response.json()
    );
}

function update(jsonCategoria) {
    console.log(jsonCategoria);
    return fetch(`${configs.URL}/categorias/${jsonCategoria.id}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify(jsonCategoria)
    }).then(
        async (response) => await response.json()
    )
}

function remove(jsonCategoria) {
    return fetch(`${configs.URL}/categorias/${jsonCategoria.id}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',
    }).then(
        async (response) => await response.json()
    )
}

function getAll() {
    return fetch(`${configs.URL}/categorias`)
    .then(
        async (response) =>  {
            if (response.ok) {
                return await response.json();
            }
            
            throw new Error('Não possível conectar com servidor')
        }
    );
}

function getAllWithVideos() {

    return fetch(`${configs.URL}/categorias/?_embed=videos`)
    .then(
        async (response) =>  {
            if (response.ok) {
                return await response.json();
            }
            
            throw new Error('Não possível conectar com servidor')
        }
    );
}

export default {
    getAllWithVideos,
    getAll,
    create,
    update,
    remove
}