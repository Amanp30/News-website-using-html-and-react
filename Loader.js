const e = React.createElement;

function Loader() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleBeforeUnload = () => setLoading(true);
    const handleLoad = () => setLoading(false);

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("load", handleLoad);

    document.body.style.overflow = loading ? "hidden" : "";

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          class="loader"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background: "yellow",
            backdropFilter: "blur(5px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "99999999",
          }}
        >
          <h2>Loading {">>>>"}</h2>
        </div>
      )}
    </>
  );
}

ReactDOM.render(
  e(Loader),
  document.body.appendChild(
    Object.assign(document.createElement("div"), { id: "theloader" })
  )
);
