import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/spinner';

export class User extends Component {

    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        console.log(this.props.user)
    }
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            type
        } = this.props.user;

        const { loading }= this.props;
        return (
            <div>

                <div className="col s12">
                   <Link to="/">Home</Link>
                   {hireable?(
                    <label>
                        <input type="checkbox" checked="checked" />
                        <span>Hireable</span>
                    </label>
                   ):
                   ( <i className="material-icons dp48">{name}</i>)
                   }
                </div>

                 <ul className="collection">
                    <li className="collection-item avatar">
                   <img src={avatar_url} alt={name}/>
                    <span className="title">{name}</span>

                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                    <i className="material-icons circle">folder</i>
    <span className="title">{ followers }</span>

                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                    <i className="material-icons circle green">insert_chart</i>
    <span className="title">{ type }</span>

                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                    <i className="material-icons circle red">play_arrow</i>
    <span className="title">{ location }</span>

                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                </ul>

            </div>
        )
    }
}

export default User
