import React, { Component } from "react";
import StudentList from "./StudentList.js"

class Students extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      currentSort: "down"
    }
  }

  // onSortChange() {
  //   const { currentSort } = this.state;
  //   let nextSort;
  //   if (this.state.currentSort === "down") {nextSort = "up"}
  //   else if (this.state.currentSort === "up") {nextSort = "default"}
  //   else if (this.state.currentSort === "default") {nextSort = "down"}
  //   this.setState({currentSort: nextSort})
  // }

  sortTable () {
    
    let table, i, x, y, switching;
    table = document.getElementById("table");
    switching = true;

    while (switching) {
      switching = false;
      let rows = table.rows;

      for (i = 1; i < (rows.length -1);i++) {

        x = rows[i].getElementsByTagName("TD")[0].innerHTML.toLowerCase();
        y = rows[i+1].getElementsByTagName("TD")[0].innerHTML.toLowerCase();

        if (x > y) {
          rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
          switching = true;
          break
        }
      }
    }
  }

  sortTable2 () {
    
    let table, i, x, y, switching;
    table = document.getElementById("table");
    switching = true;

    while (switching) {
      switching = false;
      let rows = table.rows;

      for (i = 1; i < (rows.length -1);i++) {

        x = rows[i].getElementsByTagName("TD")[1].innerHTML.toLowerCase();
        y = rows[i+1].getElementsByTagName("TD")[1].innerHTML.toLowerCase();

        if (x > y) {
          rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
          switching = true;
          break
        }
      }
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/api/students`)
      .then(res => res.json())
      .then(data => this.setState({students: data.students}))
  }

  render() {
    const { currentSort } = this.state;
    return(
      <div>
        <table id="table" border="1">
        <thead><tr>
          <th onClick={this.sortTable} value="lastName">Last Name</th>
          <th onClick={this.sortTable2} value="lastName">First Name</th>
          <th value="githubUsername">Github Username</th>
          <th value="email">email</th>
        </tr></thead>
          <StudentList students={this.state.students} />
      </table>
      {this.state.currentSort}

      </div>
    )
  }
}

export default Students

///////////////////////////////////////////////////
//test

// import React from "react";

// import { useTable } from "react-table"
// import { MOCK_DATA } from "./__mocks__/student-data.js"
// import { COLUMNS } from "./columns"

// export const BasicTable = () => {

//   const columns = useMemo(() => COLUMNS, [] )

//   return (
//     <div>

//     </div>
//   )
// }