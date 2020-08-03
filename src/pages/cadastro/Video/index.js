import React, {useState, useEffect }from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videoRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';
import useForm from '../../../hooks/useForm';

const CadastroVideo = () => {
    const history = useHistory();
    const {handleChange, values, clearForm } = useForm({
        titulo: '',
        url: '',
        categoria: ''
    });

    const [categorias, setCategorias ] = useState([]);
    const categoryTitles = categorias.map(({titulo}) => titulo);

    useEffect(() => {
        categoriaRepository.getAll().
        then(
            (result) => setCategorias(result)
        );
    }, []);

    return (
        <>
            <PageDefault>
                <h1>Cadastro de Video</h1>

                <form onSubmit={(event) => {
                    event.preventDefault();

                    const categoriaF = categorias.find((categoria) => {
                        return categoria.titulo === values.categoria;
                    });


                    videoRepository.create({
                        titulo: values.titulo,
                        url: values.url,
                        categoriaId: categoriaF.id
                    }).then(
                        (result) => {
                            console.log('cadastrou com sucesso');
                            history.push('/');
                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                        }
                    )

                    clearForm({});
                }}>
                    <FormField
                        label="Titulo do Video"
                        name="titulo"
                        value={values.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="URL"
                        name="url"
                        value={values.url}
                        onChange={handleChange}
                    />


                    <FormField
                        label="Categoria"
                        name="categoria"
                        value={values.categoria}
                        onChange={handleChange}
                        suggestions={
                           categoryTitles
                        }
                    />


                    <Button type="submit">Cadastrar</Button>

                </form>
                <br/>
                <Link to="/cadastro/categoria">
                    Cadastrar Categoria
                </Link>
            </PageDefault>
        </>
    )
}

export default CadastroVideo;