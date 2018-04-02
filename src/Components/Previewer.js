import React from 'react';
import { markdown } from 'markdown';
import Container from './Container';
import '../styles/TextArea.css';

const intialMD = `
### This markdown previewer was done as part of [freecodecamp's](https://freecodecamp.org) React projects.\n\n---\n\nIt uses [markdown.js](https://www.npmjs.com/package/markdown).\n\n---\n\n** Things to Do **\n\n* Download Markdown File\n\n
`;

const scrollSame = (e, previewer) => {
    const currPos = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight - e.target.offsetHeight;
    const percent = (currPos / scrollHeight) * 100;
    const yHeight = previewer.scrollHeight;
    previewer.scrollTop = yHeight * percent / 100;
};

class Previewer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: intialMD,
            markdown: markdown.toHTML(intialMD)
        };
        this.onTextChange = (e) => this._onTextChange(e);
        this.scrollSame = (e) => scrollSame(e, this.previewer);
    }

    componentDidMount () {        
        this.previewer= document.querySelector('.preview');
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
                    <textarea className="textarea" data-gramm_editor="false" onChange={this.onTextChange} onScroll={this.scrollSame}>
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