"use strict";

const e = React.createElement;

function NavigationMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMore, setisMore] = React.useState(false);
  const [menuToggled, setMenuToggled] = React.useState(false); // added state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setMenuToggled(true); // set the flag when the menu is toggled
  };

  React.useEffect(() => {
    const x = document.querySelector(".links");
    if (!isOpen && menuToggled) {
      // check if the menu was toggled before adding the class
      x.classList.add("closemenu");
    }
  }, [isOpen, menuToggled]);

  const togglemore = () => {
    setisMore(!isMore);
  };

  React.useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    function closemenu(event) {
      const menu = document.querySelector(".menuopen");

      if (menu && isOpen) {
        const isClickInsideMenu = menu.contains(event.target);

        if (!isClickInsideMenu) {
          setIsOpen(false);
        }
      }
    }

    body.addEventListener("click", closemenu);

    return () => {
      body.removeEventListener("click", closemenu);
    };
  }, [isOpen]);

  const [goingdown, setgoingdown] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setgoingdown(window.scrollY > 0);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  /*  React.useEffect(() => {
    var nav = document.getElementById("navigation");
    var navmenu = document.querySelector(".navmenu");
    if (goingdown) {
      nav.style.boxShadow = "#241b1b0f -1px 4px 10px 0px";
      nav.style.backdropFilter = "blur(10px)";
      nav.style.background = "#efefef85";
      navmenu.style.background = "transparent";
    } else {
      nav.style.boxShadow = "";
      nav.style.background = "";
      navmenu.style.background = "";
    }
  }, [goingdown]); */

  var data = [
    { text: "LATEST", link: "./about.html" },
    { text: "INDIA", link: "./contact.html" },
    { text: "VIDEO", link: "/" },
    { text: "OPINION", link: "/" },
    { text: "CITY", link: "/" },
    { text: "WORLD", link: "/" },
  ];

  var morelink = [
    { text: "EDUCATION", link: "/" },
    { text: "OFFBEAT", link: "/" },
    { text: "TRENDS", link: "/" },
    { text: "SOUTH", link: "/" },
    { text: "PEOPLE", link: "/" },
    { text: "SCIENCE", link: "/" },
    { text: "PHOTOS", link: "/" },
    { text: "WEATHER", link: "/" },
    { text: "TRAINS", link: "/" },
  ];

  return (
    <>
      <div className={goingdown ? "navmenu down" : "navmenu"}>
        <div className={"logo"}>
          <a href="./index.html">
            <img
              src="logo.svg"
              className={goingdown ? "sizesmall" : "thelogo"}
            />
          </a>
        </div>
        <div className="hambtn" onClick={toggleMenu}>
          <img
            className={isOpen ? "hamburger open" : "hamburger"}
            src="menu.svg"
          />
        </div>
        <div className={isOpen ? "links menuopen " : "links "}>
          {data.map((item, index) => {
            return (
              <>
                <a href={item.link} title={item.text}>
                  {item.text}{" "}
                </a>
              </>
            );
          })}

          {morelink && (
            <>
              <p className="more">
                <img
                  src="more.svg"
                  width="20"
                  onClick={togglemore}
                  className="moreimage"
                />
                <div
                  className={
                    isMore ? "desktopmorelinks open" : "desktopmorelinks "
                  }
                >
                  {morelink.map((item, index) => {
                    return (
                      <>
                        <a href={item.link} title={item.text}>
                          {item.text}{" "}
                        </a>
                      </>
                    );
                  })}
                </div>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const domContainer = document.querySelector("#navigation");
ReactDOM.render(e(NavigationMenu), domContainer);
