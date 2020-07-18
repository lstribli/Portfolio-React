import React, { useContext } from 'react'
import Context from '../Contexts/Context'
import SkillsCarousel from '../Components/Carousel/SkillsCarousel'
export default function SkillsPage() {
  const dataContext = useContext(Context)
  console.log(dataContext)
  return (
    <div>
      {SkillsCarousel(dataContext)}
      <ul className="projects">
        {dataContext.skills.map(skill =>
          <li className="project" key={skill.id}>
            <h3>{skill.general.title}</h3>
            <p>{skill.general.description}</p>
            <p>{skill.general.audience}</p>
            <img
              src={skill.screens.urls.one}
              alt={skill.screens.alts.one}
            />

            <p>Review my list of skills and decide if we're a good fit.
            If what you're looking for isn't here, contact me and lets
            discuss what we can do.
                I'm always looking to expand my knowledge.</p>
            <ul>
              <li>{skill.tech.languages.frontEnd[0]}</li>
              <li>{skill.tech.languages.frontEnd[1]}</li>
              <li>{skill.tech.languages.frontEnd[2]}</li>
              <li>{skill.tech.languages.frontEnd[3]}</li>
              <li>{skill.tech.languages.frontEnd[4]}</li>
              <li>{skill.tech.languages.frontEnd[5]}</li>
              <li>{skill.tech.languages.server[0]}</li>
              <li>{skill.tech.languages.database[0]}</li>
              <li>{skill.tech.languages.database[1]}</li>
              <li>{skill.tech.languages.database[2]}</li>
              <li>{skill.tech.languages.database[3]}</li>
            </ul>
          </li>)}
      </ul>
    </div>
  )
}
