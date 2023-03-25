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
        <a href="./about.html">About</a>
        <a href="./contact.html">Contact</a>
        <a href="./privacy.html">Privacy Policy</a>
        <a href="./cookie.html">Cookie Policy</a>
        <a href="./advertise.html">Advertise with Us</a>
        <a href="./terms-and-conditions.html">Terms and conditions </a>
      </div>
    </>
  );
}

const domContainer = document.querySelector("#footer");
ReactDOM.render(e(Footer), domContainer);
