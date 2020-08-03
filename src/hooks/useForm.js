import React,  { useState } from 'react';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({...values, [chave]: valor});
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setValue(name, value);
    }

    function clearForm() {
        setValue(valoresIniciais);
    }

    return {
        values,
        handleChange,
        clearForm,
        setValues
    }
}

export default useForm;