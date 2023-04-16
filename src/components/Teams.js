import { useState } from "react";
import NamesInTeam from "./NamesInTeam";

const TeamsMembersDisplay = ({employee, teamSelected, teamSelectedInTeamsView}) => {
  const teamArray = [
    { teamName: "TeamA", isShow: false },
    { teamName: "TeamB", isShow: false },
    { teamName: "TeamC", isShow: false },
    { teamName: "TeamD", isShow: false },
  ];

  const [showTeam, setShowTeam] = useState(
    teamArray.map( everyTeam => {
      if (everyTeam.teamName === teamSelected) {
        return {...everyTeam, isShow:true}
      } else {
        return everyTeam
      }
  }));


  function handleAll(team) {
    setShowTeam( prev => 
      prev.map(el => {
        if (el.teamName === team){
          return {
            ...el, 
            isShow:!el.isShow
          }
        } else {
          return el
        }

    }));

    teamSelectedInTeamsView(team)
  }

  return (
    <>
      <div className="groupedTeamMembers container">
        <div className="everyTeam" onClick={ () => handleAll('TeamA') }>
          <h3>Team Name : Team A</h3>
          <div>
            <ul className={showTeam[0].isShow ? "teamInfo active" : "teamInfo hidden"}>
              <NamesInTeam employee={employee} team="TeamA"/>
            </ul>
          </div>
        </div>

        <div className="everyTeam" onClick={ () => handleAll('TeamB') }>
          <h3>Team Name : Team B</h3>
          <div>
            <ul className={showTeam[1].isShow ? "teamInfo active" : "teamInfo hidden"}>
               <NamesInTeam employee={employee} team="TeamB"/>
            </ul>
          </div>
        </div>

        <div className="everyTeam" onClick={ () => handleAll('TeamC') }>
          <h3>Team Name : Team C</h3>
          <div>
            <ul className={showTeam[2].isShow ? "teamInfo active" : "teamInfo hidden"}>
               <NamesInTeam employee={employee} team="TeamC"/>
            </ul>
          </div>
        </div>

        <div className="everyTeam" onClick={ () => handleAll('TeamD') }>
          <h3>Team Name : Team D</h3>
          <div>
            <ul className={showTeam[3].isShow ? "teamInfo active" : "teamInfo hidden"}>
               <NamesInTeam employee={employee} team="TeamD"/>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamsMembersDisplay;
