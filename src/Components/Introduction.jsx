import React from 'react'
import Typist from 'react-typist'


function Introduction() {
  return (
    <div className="Intro">
      <div className="introInfo">
        <Typist cursor={{show:false}}>
        <Typist.Delay ms={500} />
          <span>&lt;html&gt;</span>
        </Typist>
      <div className="Description">
        <Typist cursor={{show:false}}>
        <Typist.Delay ms={1000} />
        <span>&lt;body&gt;</span> <br />
        <span>&lt;h1&gt;</span>
        <h2>
          Hi! <br />
          I'm Juan Manuel <br /> 
          Front-End Developer.
        </h2>
        <span>&lt;/h1&gt;</span> <br />
        <span>&lt;/body&gt;</span>
        </Typist>
      </div>
      <Typist cursor={{show:false}}>
      <Typist.Delay ms={5700} />
      <span>&lt;/html&gt;</span>
      </Typist>
      </div>
    </div> 
  )
}

export default Introduction