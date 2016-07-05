import React, {Component} from 'react'
const Portfolio = ({projects}) => {
  return(
    <ul id="og-grid" className={'og-grid'}>
      {projects.map((p,idx)=>{
        console.log(p.sname)
        return <li>
                  <a href={'#'} className={'anim one-work'}>
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