import React from 'react';
import './index.css';
import tareas from '../src/tareas/tareas.json';
import Tareas from './componentes/Tareas';

class App extends React.Component{

  state = { tareas : tareas}

  render(){
    return(
      <div>
        <Tareas tareas={this.state.tareas}/>
      </div>
    );
  }
}

export default App;
