import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {

    state = {
        text:''
    }

    static propTypes = {
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired,
    }

    onChange =(e)=>{
        this.setState({ [e.target.name]:e.target.value })
    }

    onSubmit = (e)=>{
        e.preventDefault();

        if(this.state.text===''){
            this.props.setAlert('Please enter something','light');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''});
        }

    }


    render() {
        const { clearUsers, showClear } = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      name="text"
                      placeholder="Search Users..."
                      value={this.state.text}
                      onChange={ this.onChange }
                      />
                    <input type="submit"
                    value="search"
                    className="btn btn-block"
                    />
                </form>
                <br/>
                {
                showClear && (
                 <button className="btn btn-block red lighten-2" onClick={clearUsers }>Clear</button>
                 )}
            </div>

        )
    }
}

export default Search