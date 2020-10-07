import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default class NumeroTareas extends React.Component{
    render(){
        return(
            <div style={enlace}>
                <Badge variant="light">{this.props.numTareas}</Badge>
            </div>
        )
    }
}

const enlace = {
    color:'black',
    textDecoration:'none',
    display:'inline',
    padding:'5px'
  }