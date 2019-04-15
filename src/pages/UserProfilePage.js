import React from "react";
import UserImages from '../Containers/UserImages';


class UserProfilePage extends React.Component {

    render() {
        const { id } = this.props.match.params
        const currentUser = this.props.users.find(user => user.id === parseInt(id))
        return (
            <div className='container'>
                <img src={currentUser ? currentUser.profileImage : null} style={styles.profileImage} alt='' width='150px' radius='100px' />
                {currentUser ? currentUser.username : null}
                <div className='containerFluid' style={styles.images}>
                    <UserImages userId={id} />
                </div>
            </div>

        )
    }
}

const styles = {
    container: {
        align: 'center',
    },
    userName: {
        fontSize: '30px',
        fontFamily: 'Arial',
        textAlign: 'center',
    },
    profileImage: {
        maxWidth: '150px',
        maxHeight: '150px',
        borderRadius: '100px',
        border: '3px solid pink',
    }
}

export default UserProfilePage