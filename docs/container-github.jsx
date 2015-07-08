import React from 'react';
import {ContanierComponent} from '../src';

export default class GithubUserContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    fetch('https://api.github.com/search/users?q=carlosvillu')
    .then(response => response.json())
    .then(results => results.items[0])
    .then(profile => this.setState({username: profile.login, avatar: profile.avatar_url}))
  }
  render(){
    return <ContanierComponent {...this.state} />
  }
}
