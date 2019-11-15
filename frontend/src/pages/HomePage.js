import React from 'react';
import UserList from '../components/UserList';
import HoaxSubmit from '../components/HoaxSubmit';
import HoaxFeed from '../components/HoaxFeed';
import { Auth } from '../AuthContext';

class HomePage extends React.Component {
  render() {
    return (
      <div data-testid="homepage">
        <div className="row">
          <div className="col-8">
            {this.props.loggedInUser.isLoggedIn && <HoaxSubmit />}
            <HoaxFeed />
          </div>
          <div className="col-4">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

export default class extends React.Component {
  static contextType = Auth;
  render() {
    return <HomePage loggedInUser={this.context.state} {...this.props} />;
  }
}
