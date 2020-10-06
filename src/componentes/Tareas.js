import React from 'react';
import Tarea from './Tarea';
import Proptypes from 'prop-types';

class Tareas extends React.Component{
    render(){
        return(
            this.props.tareas.map(tarea => 
                <Tarea tarea={tarea} key={tarea.id} eliminarTarea={this.props.eliminarTarea} checkTarea={this.props.checkTarea}/>
            )
                
        )
    }
}

Tareas.propTypes = {
    tareas: Proptypes.array.isRequired
}

export default Tareas;