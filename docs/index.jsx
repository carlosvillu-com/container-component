import React from 'react';
import {ContanierComponent} from '../src';
import GithubUserContainer from './container-github';
import RandomUserContainer from './container-randomUser';
import '../src/index.scss';

React.render(<RandomUserContainer />, document.getElementById('main-randomUser'));
React.render(<GithubUserContainer />, document.getElementById('main-github'));
