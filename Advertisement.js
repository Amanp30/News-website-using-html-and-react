function Advertisement({ image, link }) {
  return (
    <>
      <a href={link} target="_blank" className="Adcomp">
        <img src={image} />
        <span style={{ fontWeight: "bold" }}>Ad</span>
      </a>
    </>
  );
}

export default Advertisement;
