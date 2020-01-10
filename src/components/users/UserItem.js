import React from "react";
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={avatar_url} alt={login} />
          <span className="card-title">{ login }</span>
        </div>
        <div className="card-action">
          <Link to={`/user/${login}`}>More</Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes={
    user:propTypes.object.isRequired,
}

export default UserItem;
