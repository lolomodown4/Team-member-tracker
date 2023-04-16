import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

import EmployeeComponent from "./components/Employee";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TeamsMembersDisplay from "./components/Teams";

function App() {
  const [teamSelected, setTeamSelected] = useState(
    JSON.parse(localStorage.getItem("teamSelected")) || "TeamA"
  );

  const [employee, setEmployee] = useState(
    JSON.parse(localStorage.getItem("employees")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employee));
  }, [employee]);

  useEffect(() => {
    localStorage.setItem("teamSelected", JSON.stringify(teamSelected));
  }, [teamSelected]);

  const teamChange = (event) => {
    setTeamSelected(event.target.value);
  };

  const teamSelectedInTeamsView = (myVar) => {
    setTeamSelected(myVar);
  }

  const selectedEmployeeTeamChanged = (event) => {
    const checkTeamName = (employee) => {
      const checkEmployeeTeamName =
        employee.teamName === teamSelected
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: teamSelected };
      return checkEmployeeTeamName;
    };

    const transformedEmployees = employee.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? checkTeamName(employee)
        : employee
    );
    setEmployee(transformedEmployees);
  };

  return (
    <div>
      
      <NavBar />

      <HeaderComponent
        teamSelected={teamSelected}
        teamCount={
          employee.filter((employee) => employee.teamName === teamSelected)
            .length
        }
      />
      <Routes>

        <Route
          path="/"
          element={
            <EmployeeComponent
              teamSelected={teamSelected}
              teamChange={teamChange}
              employee={employee}
              selectedEmployeeTeamChanged={selectedEmployeeTeamChanged}
            />
          }
        />

        <Route 
          path="Teams" 
          element={
            <TeamsMembersDisplay 
              employee={employee} 
              teamSelected={teamSelected} 
              teamSelectedInTeamsView={teamSelectedInTeamsView}
            />
          } 
        />

      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
