import React, {useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#ddd'
    };

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    }

    useEffect(() => {
        const URL = 'http://localhost:8080/categorias';
        fetch(URL)
        .then(
            async (response) =>  {
                const resJson = await response.json();
                // [...resJson] = libera o cache para navegador limpar
                setCategorias([...resJson]);
            }
        ).catch(
            (error) => {
                alert(error);
            }
        )
    }, [])


    return (
        <>
            <PageDefault>
                <h1>Cadastro de Categoria {values.nome}</h1>
            
                <form onSubmit={(infosDoEvento) => {
                    infosDoEvento.preventDefault();

                    setCategorias([
                        ...categorias,
                        values
                    ]);

                    setValues(valoresIniciais);

                }}>
                       
                    <FormField
                        label="Nome da Categoria"
                        name="nome"
                        value={values.nome}
                        onChange={handleChange}
                    />

                    <FormField 
                        label="Descricao"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange}
                        type="textarea"
                    />    
                    <FormField
                        type="color"
                        label="Cor"
                        name="cor"
                        defaultValue={values.cor}
                        onChange={handleChange}
                    />

                    <Button>Cadastrar</Button>
                </form>

                <br/>   

                {categorias.length === 0 && (
                    <div>Carregadno...</div>
                )}

                {categorias.map((item) => {
                    return (
                        <div>{item.nome}</div>
                    )
                })}

                <br/>
                <Link to="/">
                    Voltar
                </Link>

                

            </PageDefault>
    
        </>
    )
}

export default CadastroCategoria;