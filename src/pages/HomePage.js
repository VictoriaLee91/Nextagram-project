import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import UserImages from '../Containers/UserImages';
import Spinner from '../Components/spinner.js';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
  state = {
    users: [],
    isLoading: true
  }

  componentDidMount() {
    this.setState({ loading: false })
  }
  render() {

    if (this.state.loading) return < Spinner />

    return (
      <>
        <div className='users' style={styles.users}>
          <ul>
            {
              this.props.users.map(user =>

                <li key={user.profileImage} style={styles.userList}>
                  <img src={user.profileImage} style={styles.profileImage} alt='landingphoto' width='150px' radius='100px' />
                  <Link to={`/users/${user.id}`} style={styles.userName}>{user.username} </Link>
                  <UserImages userId={user.id} />

                </li>
              )
            }
          </ul>
        </div>
      </>

    )
  }
}

const styles = {
  userList: {
    width: '80vw',
    margin: 'auto',
    fontFamily: 'Open Sans',
  },
  profileImage: {
    borderRadius: '100px',
    border: '5px solid pink',
  },
  userName: {
    fontSize: '30px',
    textDecoration: 'none',
    fontColor: 'black',
  },
}

