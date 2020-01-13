import React,{ useContext } from 'react'

const Alert = (alert) => {


    return (
            alert !==null && alert &&(
                <div className={`toast alert alert-${alert.type}`} style={{"display":"none"}}>
                    {alert.msg}
                </div>
            )

    )
};

export default Alert;
