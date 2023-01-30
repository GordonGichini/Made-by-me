import React from 'react'

const ProjectDetails = (props) => { 
    const id = props.match.params.id;
  return ( 
    <div className='contanier section project-details'> 
    <div className='card z-depth-o'>
        <div className='card-content'>
            <span className='card-title'>Project Title</span> 
            <p>Pushing P</p>
            <div className='card-action grey lighten-4 grey-text'>
                <div>Posted by Gordon</div> 
                <div>2nd September, 2am</div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default ProjectDetails