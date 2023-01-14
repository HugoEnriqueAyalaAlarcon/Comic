import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "./Card.css"

const Card = ({items , loading}) => {
  console.log(loading);
  console.log(items.appearance)
  if(loading){
      return <h1>Loadin</h1>;
  }

  return (
    <div className='container-fuid'>
        <div className='container-main'>
          <div className=' contenedor-img'>
            <img src={items.image.url} width="350" height="500" alt="no imagen"/>
          </div>
          <div className="container-powerstats">
            <div classclassName="powerstats">
              <h5>Powerstats</h5>
              <ul>
                <li>intelligence: {items.powerstats.intelligence}</li>
                <li>strength: {items.powerstats.strength}</li>
                <li>speed: {items.powerstats.speed}</li>
                <li>durability: {items.powerstats.durability}</li>
                <li>power: {items.powerstats.power}</li>
                <li>combat: {items.powerstats.combat}</li>
              </ul>
            </div>

            <div className="work">
            <h5>Work</h5>
              <ul>
                <li>Occupation: {items.work.occupation}</li>
                <li>Base: {items.work.base}</li>
              </ul>          
            </div>

            <div className="biography">
            <h5>Biography</h5>
              <ul>
                <li>full-name: {items.biography["full-name"]}</li>
                <li>first-appearance: {items.biography["first-appearance"]}</li>
                <li>place-of-birth: {items.biography["place-of-birth"]}</li>
                <li>publisher: {items.biography.publisher}</li>
              </ul>
            </div>
          </div>

          <div className="container-Appearance">
            <div className="Appearance">
            <h5>Appearance</h5>
              <ul>
                <li>Gender: {items.appearance.gender}</li>
                <li>Hair color: {items.appearance["hair-color"]}</li>
                <li>Eye color: {items.appearance["eye-color"]}</li>
                <li>Height: {items.appearance.height}</li>
                <li>Weight: {items.appearance.weight}</li>
              </ul>
            </div>

            
            <div className="Connections">
              <h5>Connections</h5>
              <ul>
                <li>Group affiliation: {items.appearance["group-affiliation"]}</li>
                <li>Relatives: {items.connections.relatives}</li>
              </ul>
            </div>
          </div>
      </div>

      
    </div>
  )
}

export default Card