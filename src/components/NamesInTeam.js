import React from "react";

const Names = ({employee, team}) => {
    return(
        employee.map(el => {
            if (el.teamName === team){
                return (
                    <li key={el.id} className="m-5" >
                      <h2>Full name : {el.fullName}</h2>
                      <h2>Designation : {el.designation}</h2>
                    </li>
                )
            } else {
                return null
            }
        })
    )
}

export default Names