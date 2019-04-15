import React from 'react';
import axios from 'axios';

class UserImages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userImages: []
        }
    }

    componentDidMount() {
        const { userId } = this.props
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${userId}`)
            .then(result => {
                const userImages = result.data;
                this.setState({ userImages })
            })
            .catch(error => {
                console.log('ERROR:', error)
            })
    }

    render() {
        return (
            <div>
                <p className='text-center'>{this.state.userImages.map(userImage =>
                    <img key={userImage} style={styles.userImageList} src={userImage} alt='profile' />)
                }
                </p>

            </div>
        )
    }
}


export default UserImages;

const styles = {
    userImageList: {
        width: '150px',
        height: '150px',
        margin: '10px',
        boxShadow: '10px 5px 5px grey',

    }
}