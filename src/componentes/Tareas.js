import React from 'react';
import Tarea from './Tarea';

class Tareas extends React.Component{
    render(){
        return(
            this.props.tareas.map(tarea => 
                <Tarea tarea={tarea} key={tarea.id}/>
            )
                
        )
    }
}

export default Tareas;