const e = React.createElement;

function Breakingnews() {
  const data = [
    {
      title:
        "पंजाब: देश में ही है खालिस्तानी समर्थक अमृतपाल सिंह, 8 राज्यों में छुपे होने की आशंका",
      link: "https://www.aajtak.in/breakingnews/story/23-march-2023-breaking-news-latest-news-in-hindi-ntc-1659763-2023-03-23",
    },
    {
      title:
        "क्या कोर्ट के फैसले के बाद क्या राहुल गांधी 6 साल तक नहीं लड़ पाएंगे चुनाव, सांसदी भी जाएगी? जानिए कानूनी प्रावधान",
      link: "https://www.aajtak.in/india/news/story/after-gets-2-years-jail-in-modi-surname-caste-know-how-this-judgment-will-impact-to-rahul-gandhi-ntc-1659972-2023-03-23",
    },
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const closenews = () => {
    var node = document.getElementById("breakingnews");
    node.style.display = "none";
  };

  return (
    <>
      <span style={{ display: "flex" }}>
        <span
          style={{
            fontWeight: "bolder",
            paddingRight: ".5em",
            fontStyle: "italic",
            borderRight: "1px solid white",
          }}
        >
          BREAKING NEWS
        </span>{" "}
        <a href={data[index].link}> {data[index].title}</a>
      </span>
      <span className="cross" onClick={closenews}>
        X
      </span>
    </>
  );
}

const domContainer = document.querySelector("#breakingnews");
ReactDOM.render(e(Breakingnews), domContainer);
