import React, {Component} from 'react'
const Portfolio = ({projects}) => {
  return(
    <ul id="og-grid" className={'og-grid'}>
      {projects.map((p,idx)=>{
        
        return <li key={idx}>
                  <a data-largesrc={p.sname+"/preview.png"} 
                     data-title={p.name} 
                     data-description={p.description} 
                     className={'anim one-work'}>
                    <span className={'anim'}>
                      <h3>{p.name}</h3>
                    </span>
                    <img src={p.sname+'.png'} />
                  </a>
              </li>
      })}
    </ul>
  );
}

export default Portfolio;