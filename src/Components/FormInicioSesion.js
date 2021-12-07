import React from 'react'

const FormInicioSesion = ({correo, password, handleChange, handleSubmit}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Iniciar Sesion!</h2>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    value={correo}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    value={password}
                    onChange={handleChange}
                    />
                </div>
                <div className="boorrrr">
                    <button className="btn btn-danger">
                        Ingresar!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormInicioSesion
