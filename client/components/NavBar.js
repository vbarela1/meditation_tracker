import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../actions/auth';
import { connect } from 'react-redux';

class NavBar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogout());
  }

  authLink = () => {
    if(this.props.auth)
      return(
        [
          <li key='auth-link-0'><Link to="/admin">Admin</Link></li>,
          <li key='auth-link-1'><a href='#'onClick={this.logout}>Logout</a></li>
        ]
      )
      else
      return(<li><Link to="/login">Login</Link></li>))
  }
  render() {
    return(
      <header>
        <div className='navbar-fixed'>
          <nav>
            <div className='nav-wrapper'>
              <Link to='/' className='brand-logo'>Repack: Redux Rails Auth</Link>
              <ul id='nav-mobile' className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                 { this.authLink() }
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default connect()(Navbar);
