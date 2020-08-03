import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriaRepository from '../../../repositories/categorias';

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    th {
        background-color: #444;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        color: white;
    }

    td, th {
        border: 1px solid #555;
        padding: 8px;
    }

    tr:nth-child(even){background-color: #222;}
`;

const CadastroCategoria = () => {

    const valoresIniciais = {
        id: '',
        nome: '',
        descricao: '',
        cor: '#ddd'
    };
    
    const {values, handleChange, clearForm, setValues } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);
    const [isModeUpdate, setIsModeUpdate] = useState(false); 
    const [isUpdate, setIsUpdate] = useState(false);


    useEffect(() => {
        categoriaRepository.getAll()
            .then((result) => setCategorias([...result]))
            .catch((error) => alert(error.message));
    }, [isUpdate])

    return (
        <>
            <PageDefault>
                <h1>{isModeUpdate ? 'Atualizar': 'Cadastrar'} Categoria: <i>{values.titulo}</i></h1>
            
                <form onSubmit={(infosDoEvento) => {
                    infosDoEvento.preventDefault();
                    setIsUpdate(!isUpdate);

                    if (!isModeUpdate) {
                        categoriaRepository.create({
                            ...values
                        }).then(
                            (result) => {
                                setCategorias([
                                    ...categorias,
                                    values
                                ]);
                                setValues(valoresIniciais);
                            }                      
                        )    
                    } else {
                        alert('sss');
                        categoriaRepository.update(values).then(
                            (result) => {
                                setValues(valoresIniciais);
                                setIsModeUpdate(false);
                      
                            }                      
                        )   
                    }

              
                    clearForm(valoresIniciais);

                   

                }}>
                       
                    <FormField
                        label="Titulo"
                        name="titulo"
                        value={values.titulo}
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
                        value={values.cor}
                        onChange={handleChange}
                    />

                    <Button color="red">Salvar</Button>
                </form>

                <br/>   

                {categorias.length === 0 && (
                    <div>carregando...</div>
                )}
               
                 
                <Table style={{width: '100%'}}>
                            <thead>
                                <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Cor</th>
                                <th>Ações</th>
                                </tr>
                         
                            </thead>
                            <tbody>
                                {categorias.map((item) => {
                                    return (
                                        <tr key={`table-item-${item.id}`}>
                                            <td align="center">{item.id}</td>
                                            <td>{item.titulo}</td>
                                            <td><span style={{backgroundColor: item.cor, padding: '2px'}}>Cor</span></td>
                                            <td>
                                                <Button onClick={
                                                    () => {
                                                        setIsModeUpdate(true);
                                                        setValues(item);
                                                    }
                                                
                                                }>Editar</Button>
                                                &nbsp;
                                                <Button onClick={
                                                    () => {
                                                        const con = window.confirm('Deseja Remover este item');
                                                        if (con) {
                                                            categoriaRepository.remove(item);
                                                            setIsUpdate(!isUpdate);
                                                        }
                                                    }
                                                }>Remover</Button>
                                            </td>
                                        </tr>
                                    )                              
                                    
                                })}
                            </tbody>
                        </Table>
                 
             

                <br/>
                <Link to="/">
                    Voltar
                </Link>

                

            </PageDefault>
    
        </>
    )
}

export default CadastroCategoria;