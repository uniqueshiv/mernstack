import React from 'react'

const Alert = ({ alert }) => {
    console.log(alert)
    return (
            alert !==null && alert &&(
                <div className={`toast alert alert-${alert.type}`}>
                    {alert.msg}
                </div>
            )

    )
};

export default Alert;
