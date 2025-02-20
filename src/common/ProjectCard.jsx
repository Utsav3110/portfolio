function ProjectCard({ src, link, h3, p, code, live }) {
  return (
    <div className="projectCard">
      <a href={link} target="_blank" className="mainLink" rel="noreferrer">
        <img className="hover" src={src || "/placeholder.svg"} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
      <div className="linkButtons">
        {code && (
          <a className="codeLink" href={code} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
        {live && (
          <a className="liveLink" href={live} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
