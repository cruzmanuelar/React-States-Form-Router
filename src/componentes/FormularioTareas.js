import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class FormularioTareas extends React.Component{

    state = {
        titulo:"",
        descripcion:""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.agregarTarea(this.state.titulo,this.state.descripcion);
        this.setState({
            titulo:"",
            descripcion:""
        })

    }

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <Form.Control type="text"
                className="my-2"
                placeholder="Tarea"
                name="titulo"
                onChange={this.onChange} value={this.state.titulo}
                required
                />
                <Form.Control
                className="my-2"
                as="textarea"
                name="descripcion"
                rows="1"
                placeholder="Descripcion"
                onChange={this.onChange} value={this.state.descripcion}
                required
                />
                <Button value="Agregar" variant="success" type="submit">Agregar</Button>
            </form>
        )
    }
}

export default FormularioTareas;