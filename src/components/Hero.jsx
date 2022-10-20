import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img
          alt="HeroImg"
          src={props.heroImg}
          // src="https://images.unsplash.com/photo-1491446559770-3fc03a481cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          // style={{ width: 1500 + "px" }}
        />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a
            href={props.url}
            className={props.btnClass}
            target="_blank"
            rel="noreferrer"
          >
            Travel Plan
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
