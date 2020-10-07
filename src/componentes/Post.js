import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Post extends Component {

    state = {
        post:[]
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({post:data})
    }

    render() {
        return (
            <div>
                <div className="my-2">
                    <div style={estiloPost}>
                        Posts
                    </div>
                </div>
                {
                    this.state.post.map(post=>{
                        return <Card className="my-1" key={post.id}>
                            <Card.Header style={idPost}>Post #{post.id}</Card.Header>
                            <Card.Title style={titlePost} className="ml-2 mt-2">Titulo: {post.title}</Card.Title>
                            <Card.Text style={bodyPost} className="py-2">{post.body}</Card.Text>
                        </Card>
                    })
                }
            </div>
        )
    }
}

const estiloPost = {
    fontSize:'20px',
    padding:'8px',
    textAlign:'center',
    fontWeight:'600',
    backgroundColor:'#86A3DA',
    borderRadius:'5px',
    fontFamily: 'Varela Round',
    border: '2px solid gray',
    boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'

}
const idPost = {
    fontFamily: 'Varela Round',
    backgroundColor:'#90c6e7',
    color:'black'
}
const titlePost = {
    fontFamily: 'Varela Round',
}
const bodyPost = {
    fontFamily: 'Varela Round',
}