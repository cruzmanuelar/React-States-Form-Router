import React from 'react';
import PropTypes from 'prop-types';

class Tarea extends React.Component{

    estiloTarea(){
        return {
            fontSize:'20px',
            color: this.props.tarea.hecho ? 'black' : 'gray',
            textDecoration: this.props.tarea.hecho ? 'none' : 'line-through ',
            backgroundColor:''
        }
    }

    render(){

        //Destructuring
        const { tarea } = this.props;

        return(
            <p style={this.estiloTarea()}>
                {tarea.id} - 
                {tarea.titulo} : {tarea.descripcion}
                <input type="checkbox"/>
                <button style={btnElimnar}>X</button>
            </p>
        )
    }
}

Tarea.propTypes = {
    tarea : PropTypes.object.isRequired
}

//Estilo en línea para el button
const btnElimnar = {
    fontSize:'18px',
    borderRadius:'50%',
    padding:'5px 8px',
    backgroundColor:'#EA1D1D',
    border:'1px solid black'
}

export default Tarea;