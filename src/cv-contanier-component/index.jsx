import React from 'react';

export default class ContanierComponent extends React.Component {
  render() {
    return (
      <div className='cv-ContanierComponent'>
        <img className='cv-ContanierComponent-image' src={this.props.avatar} />
        <ul className='cv-ContanierComponent-list'>
          <li className='cv-ContanierComponent-nick'>{`Nick: ${this.props.username}`}</li>
        </ul>
      </div>
    );
  }
}

ContanierComponent.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired
};
