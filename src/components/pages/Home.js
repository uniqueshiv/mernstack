import React,{Fragment} from 'react'

import User from "../users/User";
import Search from "../users/Search";

const Home = () => {
    return (
        <Fragment>

              <Fragment>
                 <Search setAlert = { showAlert } />
                  <Users />
              </Fragment>

        </Fragment>
    )
}

export default Home;