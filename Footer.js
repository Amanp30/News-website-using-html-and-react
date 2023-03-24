"use strict";
const e = React.createElement;

function Footer() {
  var date = new Date();

  var startyear = 2022;
  return (
    <>
      <p>
        © Copyright{" "}
        {startyear === date.getFullYear() ? (
          date.getFullYear()
        ) : (
          <>
            {startyear} - {date.getFullYear()}
          </>
        )}
      </p>
      <div className="footerlinks">
        <a href="/About.html">About</a>
        <a href="/Contact.html">Contact</a>
        <a href="/Privacy.html">Privacy Policy</a>
        <a href="/Cookie.html">Cookie Policy</a>
        <a href="/Advertise.html">Advertise with Us</a>
        <a href="/Terms-and-conditions.html">Terms and conditions </a>
      </div>
    </>
  );
}

const domContainer = document.querySelector("#footer");
ReactDOM.render(e(Footer), domContainer);
