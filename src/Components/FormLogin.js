import React from 'react'

const FormLogin = ({correo, password, password2, handleChange, handleSubmit}) => 
{

    

    return (
        <div className="card">
            <div className="card-header">
                <h3>Registrate!</h3>
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
                <div className="form-group">
                    <label htmlFor="">Confirma Tu Password</label>
                    <input 
                    type="password"  
                    className="form-control" 
                    name="password2" 
                    value={password2}
                    onChange={handleChange}
                    />
                </div>
                <div className="kjkjb233">
                    <button className="btn btn-primary">
                        Enviar
                    </button>
                </div>

            </form>
            
        </div>
    )
}

export default FormLogin
