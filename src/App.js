import React from 'react';
import './index.css';
import tareas from '../src/tareas/tareas.json';
import Tareas from './componentes/Tareas';
import FormularioTareas from './componentes/FormularioTareas';

class App extends React.Component{

  state = { tareas : tareas}

  agregarTareas = (titulo, descripcion) => {
    const nuevaTarea = {
      titulo:titulo,
      descripcion:descripcion,
      id:45
    }
    this.setState({
      tareas: [...tareas,nuevaTarea]
    })
  }

  render(){
    return(
      <div>
        <FormularioTareas agregarTarea={this.agregarTareas}/>
        <Tareas tareas={this.state.tareas}/>
      </div>
    );
  }
}

export default App;
