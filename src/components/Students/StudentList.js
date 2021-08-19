import React from "react";
import Student from "./Student.js"

const StudentList = (props) => {
  return (
    <tbody id="student-list-body">
      {props.students.map((student, index) => <Student key={student.id} student={student} />)}
    </tbody>
  )
}

export default StudentList