import React, { Component } from 'react';
import Axios from '../../../Axios';
import {Route} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import '../FullPost/FullPost';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        // console.log(this.props);
        Axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Gourav"
                    }
                });

                this.setState({ posts: updatedPosts })
                // console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });
    }

    postSelectedHandler(id) {
        console.log(this.props.history);
        this.props.history.push({pathname: '/posts/' + id})
    }

    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                   
                );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path='/posts/:id' exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;