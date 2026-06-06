import React from 'react'
import project from "./data/projects.json"

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id='projects'>
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {project.map((data) => (
            <>
              <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-3 mx-3'>
                <div className="card bg-dark text-light"  data-aos='flip-right'
        data-aos-duration="1000" style={{ width: "18rem", border: "1px solid yellow", boxShadow: "5px 5px 10px 10px rgba(101,175,10,0.5) mx-4" }}>
                  <div className="img d-flex justify-content-center align-items-center p-3"  >
                    <img src={data.imageSrc} className="card-img-top" alt={data.title}  style={{ width: '250px', height: '200px', border: "2px solid yellow", borderRadius: "10px" }} />

                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">{data.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <div className='d-flex justify-content-around'>
                      <a href={data.demo} className="btn btn-primary ">Demo</a>
                      <a href={data.source} className="btn btn-warning ">Source</a>
                    </div>

                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
