import configs from '../config';

function create(jsonVideo) {
    return fetch(`${configs.URL}/videos`, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(jsonVideo)
    }).then(
        async (response) => {}
    )
}



export default {
    create
}