import React from 'react';
import {ContanierComponent} from '../src';

export default class RandomUserContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    fetch('http://api.randomuser.me')
    .then(response => response.json())
    .then(data => data.results[0].user)
    .then(profile => this.setState({username: profile.username, avatar: profile.picture.medium}))
  }
  render(){
    return <ContanierComponent {...this.state} />
  }
}

