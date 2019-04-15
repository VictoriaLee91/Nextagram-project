import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = (props) => (
    < Loader
        type='CradleLoader'
        color='#c92484'
        height='100'
        width='100'
        loading={this.props.loading}
    />
)


export default Spinner