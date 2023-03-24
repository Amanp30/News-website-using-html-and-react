function Thenews({
  data,
  heading,
  morelink,
  moretext,
  bigOne,
  posts,
  horizontal,
  padding,
  imageright,
  style,
}) {
  const Theheadsection = () => {
    return (
      <>
        {heading && (
          <>
            <div className="heading">
              <h2>{heading}</h2>{" "}
              {moretext && (
                <a href={morelink} className="morelink">
                  {moretext}
                </a>
              )}
            </div>
          </>
        )}
      </>
    );
  };

  const Thepost = ({ link, image, title }) => {
    return (
      <>
        <a href={link} className="postwithimage" target="_blank">
          <div className={imageright ? "dorightgrid" : ""}>
            <img
              src={image}
              loading="lazy"
              style={{ maxHeight: style, height: style }}
            />
            <h2 style={{ padding: padding ? padding : "" }}> {title}</h2>
          </div>
        </a>
      </>
    );
  };

  const Wrapping = ({ children }) => {
    return (
      <>
        <div
          className={
            horizontal
              ? "horizontal postcompwrapper"
              : "vertical postcompwrapper"
          }
        >
          {children}
        </div>
      </>
    );
  };

  if (bigOne) {
    return (
      <>
        <Wrapping>
          <Theheadsection />
          <Thepost
            link={data[0].link}
            image={data[0].image}
            title={data[0].title}
          />
        </Wrapping>
      </>
    );
  }

  return (
    <>
      {horizontal ? (
        <>
          {<Theheadsection />}
          <Wrapping>
            {data.slice(0, posts).map((item, index) => (
              <React.Fragment key={index}>
                <Thepost
                  link={item.link}
                  image={item.image}
                  title={item.title}
                />
              </React.Fragment>
            ))}
          </Wrapping>
        </>
      ) : (
        <Wrapping>
          {<Theheadsection />}
          {data.slice(0, posts).map((item, index) => (
            <React.Fragment key={index}>
              <Thepost link={item.link} image={item.image} title={item.title} />
            </React.Fragment>
          ))}
        </Wrapping>
      )}
    </>
  );
}

export default Thenews;
