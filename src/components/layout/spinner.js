import React, { Fragment } from "react";
import Loading from './spinner.gif';



const Spinner = () => <Fragment>
                        <img src={ Loading } alt="loading..." style={{width:'200px',margin:'auto',display:'block'}} />
                    </Fragment>


export default Spinner;