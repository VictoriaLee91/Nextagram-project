import React from 'react';
import axios from 'axios';

export default class MyProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myProfileImage: [],
            myUsername: [],
            myImages: [],
        }
    }

    componentDidMount() {
        const jwt = localStorage.getItem('jwt')
        const myUsername = localStorage.getItem('myUsername')
        const myProfileImage = localStorage.getItem('myProfileImage')
        axios({
            method: 'get',
            url: 'https://insta.nextacademy.com/api/v1/images/me',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
            .then(result => {
                const myImages = result.data;
                this.setState({
                    myImages,
                    myUsername,
                    myProfileImage,
                })
            })
            .catch(error => {
                console.log('ERROR:', error)

            })
    }
    render() {

        return (
            <>
                <div className='container'>
                    <div style={styles.myUsername}>{this.state.myUsername}</div>
                    <img style={styles.myProfileImage} src= {`http://next-curriculum-instagram.s3.amazonaws.com/${this.state.myProfileImage} `} alt='' />
                </div>
                <hr />
                <div className='containerFluid'>
                    {this.state.myImages.map(myImage =>
                        <img key={myImage} style={styles.myImages} src={myImage} alt='' />)
                    }
                </div>
            </>
        )
    }
}



const styles = {
    myUsername: {
        fontFamily: 'Comic Sans',
        fontSize: '50px',
        textAlign: 'center',
    },
    myProfileImage: {
        width: '150px',
        height: '150px',

    },
    myImages: {
        width: '150px',
        height: '150px',
        margin: '10px',
        align: 'center',
    }
} 
