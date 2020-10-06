import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

class Tarea extends React.Component{

    estiloTarea(){
        return {
            fontSize:'18px',
            color: this.props.tarea.hecho ? 'black' : 'gray',
            textDecoration: this.props.tarea.hecho ? 'none' : 'line-through ',
            backgroundColor:'',
            margin:'0px',
            padding:'0px'
        }
    }

    render(){

        //Destructuring
        const { tarea } = this.props;

        return(
            <div>
                <p style={this.estiloTarea()}>
                <input type="checkbox" onChange={this.props.checkTarea.bind(this,tarea.id)}/> {tarea.titulo} : {tarea.descripcion}
                <Button variant="danger m-2" onClick={this.props.eliminarTarea.bind(this,tarea.id)}>Eliminar</Button>
                </p>
            </div>
        )
    }
}

Tarea.propTypes = {
    tarea : PropTypes.object.isRequired
}

/*Estilo en línea para el button
const btnElimnar = {
    fontSize:'18px',
    borderRadius:'50%',
    padding:'5px 8px',
    backgroundColor:'#EA1D1D',
    border:'1px solid black'
}
Estilo antiguo de button --> style={btnElimnar}
*/

export default Tarea;