import data from "../../data/index.json"; // You can remove this import since it's no longer needed.

export default function SkillsSection() {
  return (
    <section className="skill--section" id="skills">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Skills</p>
          <h2 className="sections--heading">Technologies I Use</h2>
        </div>
      </div>
      <div className="skill--section--container">
        {data?.skill?.map((item) => (
          <div key={item.id} className="skill--section--card">
            <img src={item.src} alt={item.title} className="skill--image" />
            <p className="skill--title">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
