import React from 'react';
import Container from './Container';

class Previewer extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="previewer">
                <Container className="left" />
                <Container className="right" />
            </div>
        )
    }
}

export default Previewer;