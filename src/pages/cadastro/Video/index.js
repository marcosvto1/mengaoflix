import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

const CadastroVideo = () => {
    return (
        <>
            <PageDefault>
                <h1>Cadastro de Video</h1>
            
                <Link to="/cadasto/categoria">
                    Cadastrar Categoria
                </Link>
            </PageDefault>
        </>
    )
}

export default CadastroVideo;