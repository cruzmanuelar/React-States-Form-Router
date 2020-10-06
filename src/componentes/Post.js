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
                <Card className="my-2">
                    <Card.Body style={estiloPost}>
                        Posts
                    </Card.Body>
                </Card>
                {
                    this.state.post.map(post=>{
                        return <Card className="my-1" key={post.id}>
                            <Card.Header style={titlePost}>Post #{post.id}</Card.Header>
                            <Card.Title className="ml-2">Titulo: {post.title}</Card.Title>
                            <Card.Text className="py-2">{post.body}</Card.Text>
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
}
const titlePost = {
    backgroundColor:'#C2D2F1'
}
