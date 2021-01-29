import React, {Component} from 'react';
import './note';
import PropTypes from 'prop-types';

class Note extends Component{
    constructor(props){
        super(props);
        this.message = "hello from note component"
    }
    render(props){
        this.render(
            <div>
                <h1>{this.message}</h1>
            </div>
        )
    }
}
Note.propTypes = {

}
export default Note;
