import React from 'react'

const ProjectItems = ({item}) => {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className='project__img'/>
      <h3 className="project__title">{item.title}</h3>
      <a
        href={item.demoLink}
        className="project__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        View <i className="bx bx-right-arrow-alt"></i>
      </a>
    </div>
  )
}

export default ProjectItems