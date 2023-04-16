import React from "react";

function Header({ teamSelected, teamCount }) {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-3 mb-2">
          <h1>Team Member Allocation</h1>
          <h2>
            {teamSelected} has {teamCount} members
          </h2>
        </div>
      </div>
    </>
  );
}

export default Header;
