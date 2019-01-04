import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
})
class Blog extends Component {
    render () {
        return <div className="Blog">
            <header>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{ color: "#fa293f", textDecoration: "underline" }}>
                      Posts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={{ pathname: "/new-post", hash: "#submit", search: "?quick-submit=true" }}>
                      New Post
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <Switch>
                <Route path="/new-post" component={AsyncNewPost} />
                <Route path="/" component={Posts} />
            </Switch>
          </div>;
    }
}

export default Blog;