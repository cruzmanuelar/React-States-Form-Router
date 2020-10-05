import React from 'react';

class FormularioTareas extends React.Component{

    state = {
        titulo:"",
        descripcion:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.agregarTarea(this.state.titulo,this.state.descripcion);

    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" 
                    name="titulo"
                    placeholder="Escribe una tarea"
                    onChange={this.onChange} value={this.state.titulo}/>
                    <br/>

                <textarea placeholder="Escribe una descripcion" 
                name="descripcion"
                onChange={this.onChange} value={this.state.descripcion}>
                </textarea>
                <br/>
                <input value="Agregar" type="submit"/>
            </form>
        )
    }
}

export default FormularioTareas;