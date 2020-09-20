import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like coding and solving client based applications and problems</p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF8xSltgwvczg/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=JBVrfZyxCenFErvoTmZlqsZO-iCAjy4oTR1idMvw8tw" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app'));
