import React, {useState} from 'react'
import './CSS/FormularioIngreso.css'

const FormularioIngreso = (props) => {

    const objetoInicial = 
    {
        nombre: '',
        tipo: '',
        ataque: '',
        vida: '',
        imagen: ''
    }

    const [values1, setValues1] = useState(objetoInicial)


    const handleSubmit = (e)=>
    {
        e.preventDefault()
        props.gardarDB(values1)
        setValues1({...objetoInicial})
    }


    const handleChange = (e)=>
    {
        const { name, value } = e.target
        setValues1({...values1, [name]: value})
    }




    return (
        <div className="grandoteee">
            <div className="card">
            <div className="card-header">
                <h3>Incribete Aqui!</h3>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-group">
                    <label htmlFor="">Id</label>
                    <input 
                    onChange={handleChange} 
                    type="text" 
                    className="form-control" 
                    name="id"
                    value={values1.id}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input 
                    onChange={handleChange} 
                    type="text" 
                    className="form-control" 
                    name="nombre"
                    value={values1.nombre}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Tipo</label>
                    <input 
                    onChange={handleChange} 
                    type="text" 
                    className="form-control" 
                    name="tipo" 
                    value={values1.tipo}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Ataque</label>
                    <input 
                    onChange={handleChange} 
                    type="text" 
                    className="form-control" 
                    name="ataque" 
                    value={values1.ataque}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Vida</label>
                    <input 
                    onChange={handleChange} 
                    type="text" 
                    className="form-control" 
                    name="vida"
                    value={values1.vida} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Imagen</label>
                    <input 
                    onChange={handleChange} 
                    type="figure" 
                    className="form-control" 
                    name="imagen"
                    value={values1.imagen} 
                    />
                </div>
                <div className="espaciobotonn">
                    <button className="btn btn-danger">
                        Inscribirme!
                    </button>
                </div>
            </form>
        </div>
        </div>
        
    )
}

export default FormularioIngreso
