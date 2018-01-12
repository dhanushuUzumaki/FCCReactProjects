import React from 'react';
import { markdown } from 'markdown';
import Container from './Container';
import '../styles/TextArea.css';

const intialMD = `
### This markdown previewer was done as part of [freecodecamp's](https://freecodecamp.org) React projects.\n\n---\n\nIt uses [markdown.js](https://www.npmjs.com/package/markdown).\n\n---\n\n** Things to Do **\n\n* Download Markdown File\n\n
`;

class Previewer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: intialMD,
            markdown: markdown.toHTML(intialMD)
        };
        this.onTextChange = (e) => this._onTextChange(e);
    }

    _onTextChange (e) {
        const text = e.target.value;
        const md = markdown.toHTML(text);
        this.setState({
            markdown: md,
            text
        });
    }

    render () {
        return (            
            <div className="previewer">
                <Container className="left">
                    <textarea className="textarea" data-gramm_editor="false" onChange={this.onTextChange}>
                        {this.state.text}
                    </textarea>
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