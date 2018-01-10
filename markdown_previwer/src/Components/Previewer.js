import React from 'react';
import { markdown } from 'markdown';
import Container from './Container';
import '../styles/TextArea.css';

class Previewer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
            markdown: ''
        };
        this.onTextChange = () => this._onTextChange();
    }

    _onTextChange () {
        const text = this.comp.textContent;
        const md = markdown.toHTML(text);
        this.setState({
            markdown: md
        });
    }

    render () {
        return (            
            <div className="previewer">
                <Container className="left">
                    <div className="textArea" contentEditable ref={(comp) => this.comp = comp} onKeyUp={this.onTextChange}>
                    </div>
                </Container>
                <Container className="right">
                    <div className="preview" dangerouslySetInnerHTML={{ __html: this.state.markdown }}>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Previewer;