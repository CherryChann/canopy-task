import React from 'react';
const styles = {
    toolbar: {
        marginBottom: 20,
        border: '1px solid red',
    },
    dark: {
        background: 'purple',
        color: 'white',
    }
}

class Toolbar extends React.Component {
    render() {
        return ( 
            <div style = {
                styles.toolbar,
                styles.dark
            }
            > {
                this.props.children
            } </div>
        );
    }
}
export default Toolbar;
