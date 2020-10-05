import React from 'react';

class Tarea extends React.Component{
    render(){
        //Destructuring
        const { tarea } = this.props;

        return(
            <div>
                {tarea.id} - 
                {tarea.titulo} : {tarea.descripcion}
                <input type="checkbox"/>
                <button>X</button>
            </div>
        )
    }
}

export default Tarea;