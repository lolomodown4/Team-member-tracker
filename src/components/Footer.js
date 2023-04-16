import React from "react";

function Footer() {
  var date = new Date();

  return (
    <div className="container mt-4 mb-3">
      <div className="justify-content-center">
        <h3>Team allocation app - {date.getFullYear()}</h3>
      </div>
    </div>
  );
}

export default Footer;
