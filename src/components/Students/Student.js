import React from "react";

const Student = (props) => {
  return (
    <tr>
      <td>{props.student.lastName}</td>
      <td>{props.student.firstName}</td>
      <td>{props.student.githubUsername}</td>
      <td>{props.student.email}</td>
    </tr>
  )
}

export default Student