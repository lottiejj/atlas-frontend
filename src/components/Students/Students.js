import React, { Component } from "react";
import StudentList from "./StudentList.js"

class Students extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  sortTable (num) {
    
    let table, i, x, y, processing, direction = "up", counter = 0 ;
    table = document.getElementById("table");
    processing = true;

    while (processing) {
      processing = false;
      let rows = table.rows;

      for (i = 1; i < (rows.length -1);i++) {

        x = rows[i].getElementsByTagName("TD")[num].innerHTML.toLowerCase();
        y = rows[i+1].getElementsByTagName("TD")[num].innerHTML.toLowerCase();

        if (direction === "up" && x > y) {
          rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
          counter ++;
          processing = true;
          break
        }

        if (direction === "down" && y > x) {
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            counter ++;
            processing = true;
            break
        }

        if(counter === 0 && direction === "up"){
            direction = "down";
            processing = true;
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
    return(
      <div>
          <p>Click on headers to order alphaphetically acsending or decending.</p>
        <table id="table" border="1">
        <thead><tr>
          <th onClick={(e) => {this.sortTable(0)}} value="lastName">Last Name</th>
          <th onClick={(e) => {this.sortTable(1)}} value="lastName">First Name</th>
          <th onClick={(e) => {this.sortTable(2)}}  value="githubUsername">Github Username</th>
          <th onClick={(e) => {this.sortTable(3)}}  value="email">email</th>
        </tr></thead>
          <StudentList students={this.state.students} />
      </table>
      {this.state.currentSort}

      </div>
    )
  }
}

export default Students