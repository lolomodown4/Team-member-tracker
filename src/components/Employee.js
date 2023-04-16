import React from "react";
import femalePic from "../images/femaleProfile.jpg";
import malePic from "../images/maleProfile.jpg";

const Employee = ({
  employee,
  teamSelected,
  teamChange,
  selectedEmployeeTeamChanged,
}) => {
  return (
    <main className="container mt-4">
      <div className="select-container">
        <select
          className="form-select form-select-lg mb-3"
          defaultValue={teamSelected}
          onClick={teamChange}
        >
          <option value="TeamA">Team A</option>
          <option value="TeamB">Team B</option>
          <option value="TeamC">Team C</option>
          <option value="TeamD">Team D</option>
        </select>
      </div>
      <div className="card-collection">
        {employee.map((singleEmployee) => (
          <div
            id={singleEmployee.id}
            key={singleEmployee.id}
            className={
              singleEmployee.teamName === teamSelected
                ? "card m-2 standout singleCard "
                : "card m-2 singleCard"
            }
            onClick={selectedEmployeeTeamChanged}
          >
            <img
              src={singleEmployee.gender === "male" ? malePic : femalePic}
              alt="Employee"
            />
            <div className="card-body">
              <h5>Full Name : {singleEmployee.fullName}</h5>
              <p className="card-text">
                <b> Designation : </b> {singleEmployee.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Employee;
