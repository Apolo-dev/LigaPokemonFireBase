import React, {useState} from 'react'
import {db} from '../Firebase'
import './CSS/FormRegistro.css'

const FormRegistro = (props) => {

    const formInicial = 
    {
        bombo: '',
        nombre: '',
        tipo: '',
        ataque: '',
        defensa: ''
    }
    
    const [values, setValues] = useState(formInicial)

    const handleSubmit = e =>
    {
        e.preventDefault()
        props.conectarFirebase(values)
        // para limpiar el formulario
        setValues({...formInicial})
    }

    const handleChange = e =>
    {
        const { name, value } = e.target
        setValues({...values, [name]:value})
    }
    

    return (
        <div className="card">
            <div className="card-header">
                <h4>Registrate !</h4>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-group">
                    <label htmlFor="bombo">Bombo</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="bombo"
                    value={values.bombo}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tipo">Tipo</label>
                    <input  
                    type="text" 
                    className="form-control" 
                    name="tipo"
                    value={values.tipo}
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Ataque</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    name="ataque" 
                    value={values.ataque}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="defensa">Defensa</label>
                    <input  
                    type="number" 
                    className="form-control" 
                    name="defensa" 
                    value={values.defensa}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="defensa">Imagen</label>
                    <input  
                    type="figure" 
                    className="form-control" 
                    name="imagen" 
                    value={values.imagen}
                    onChange={handleChange}
                    />
                </div>
                <div className="divBoton">
                    <button  className="btn btn-danger ">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormRegistro

