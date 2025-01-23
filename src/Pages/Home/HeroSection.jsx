export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Bhanu kaushik Reddy Palagiri</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Turning ideas into interactive experiences, one line of code at a time.
            <br /> Let's create something extraordinary together..
          </p>
        </div>
        <a
        onClick={() => window.open('/BhanuKaushik_Resume.pdf', '_blank')}
          className="btn btn-primary"
        >
          My Resume
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
