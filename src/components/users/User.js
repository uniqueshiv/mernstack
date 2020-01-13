import React, { useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
// import Spinner from '../layout/spinner';
import GithubContext from '../../context/github/githubContext';

const User =({ match }) =>{

    const githubContext = useContext(GithubContext);

    const { user,loading} = githubContext;

    useEffect(()=>{
        githubContext.getUser(match.params.login);
    },[]);

    const {
        name,
        avatar_url,
        location,
        followers,
        hireable,
        type
    } = user;

    return (
        <div>

            <div className="col s12">
                <Link to="/">Home</Link>
                {hireable?(
                <label>
                    {/* <input type="checkbox" checked="checked" /> */}
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
    );
};

export default User
