import React from 'react';
import './index.css';
import tareas from '../src/tareas/tareas.json';
import Tareas from './componentes/Tareas';
import FormularioTareas from './componentes/FormularioTareas';

class App extends React.Component{

  state = { tareas : tareas}

  agregarTareas = () => {
    console.log("Agregando una tarea");
  }

  render(){
    return(
      <div>
        <FormularioTareas/>
        <Tareas tareas={this.state.tareas}/>
      </div>
    );
  }
}

export default App;
