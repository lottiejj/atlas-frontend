import React from "react";
import Student from "./Student.js"

const StudentList = (props) => {
  return (
    <tbody id="students-list">
      <tr>
        <td>Testerson</td>
        <td>Test</td>
        <td>testgit</td>
        <td>email@email.com</td>
      </tr>
      <tr>
        <td>Aesterson</td>
        <td>Zest</td>
        <td>testgit</td>
        <td>email@email.com</td>
      </tr>
      {props.students.map(student => <Student key={student.id} student={student} />)}
    </tbody>
  )
}

export default StudentList

// .sort(sortTypes[currentSort].fn)