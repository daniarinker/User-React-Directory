import React from "react";
import "./../styling/style.css";
import moment from "moment";

function DataTable(props) {
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th scope="col" className="pl-5">
            Profile Pic
          </th>
          <th scope="col" onClick={props.handleSort}>
            Employee Name
          </th>
          <th scope="col">Phone Number</th>
          <th scope="col" onClick={props.handleSort}>
            Email Address
          </th>
          <th scope="col">Birthday</th>
        </tr>
      </thead>
      <tbody>
        {props.employeeArray.length > 0 ? (
          props.employeeArray.map((employee) => {
            return (
              <tr>
                <td>
                  {" "}
                  <img className="pl-3" src={employee.picture.thumbnail} />
                </td>

                <td>{employee.name.first + " " + employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{moment(employee.dob.date).format("YYYY-MM-DD")}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td> </td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default DataTable;
