import React from 'react';
import './index.css';
import tareas from '../src/tareas/tareas.json';
import Tareas from './componentes/Tareas';
import FormularioTareas from './componentes/FormularioTareas';
import Post from './componentes/Post';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumeroTareas from './componentes/NumeroTareas';

class App extends React.Component{

  state = { tareas : tareas}

  agregarTareas = (titulo, descripcion) => {
    const nuevaTarea = {
      titulo:titulo,
      descripcion:descripcion,
      hecho:true,
      id:this.state.tareas.length
    }
    this.setState({
      tareas: [...this.state.tareas,nuevaTarea]
    })
  }

  eliminarTarea = (id) =>{
    const nuevasTareas = this.state.tareas.filter(task => task.id !== id);
    this.setState({tareas:nuevasTareas})
  }

  checkTarea = (id) => {
    const nuevasTareas = this.state.tareas.map(tarea => {
      if(tarea.id === id){
        tarea.hecho = !tarea.hecho
      }
      return tarea;
    })

    this.setState({tareas:nuevasTareas})
  }

  render(){
    return(
      <div>
        <Router>
          <Link style={enlaceTarea} to="/">Tareas</Link>
          <NumeroTareas numTareas={this.state.tareas.length}/>
          <Link style={enlacePost} to="/post">Posts</Link>
          <Route exact path="/" render={()=>{
            return <div>
              <FormularioTareas agregarTarea={this.agregarTareas}/>
              <Tareas tareas={this.state.tareas} eliminarTarea={this.eliminarTarea} checkTarea={this.checkTarea}/>
            </div>
          }}>
          </Route>
          <Route exact path="/post" component={Post}/>
        </Router>

      </div>
    );
  }
}

const enlaceTarea = {
  color:'white',
  textDecoration:'none',
  marginLeft:'6px',
  marginRight:'0px',
  display:'inline',
  padding:'5px'
}

const enlacePost = {
  color:'white',
  textDecoration:'none',
  margin:'6px',
  display:'inline',
  padding:'5px'
}


export default App;
