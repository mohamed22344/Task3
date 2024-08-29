import "./HomeCards.css"
const HomeCards = ({Img,luxury,price,desc, Bed,Path,Area,Floor,Park,Visit, Bold}) => {
  return (
    <div className="cards">
        <div className="card-num">
        <img src={Img} ></img>
        <div className="lx">
        <button>{luxury}</button>
        <span>{price}</span>
        </div>
        
        <h3>{desc}</h3>
        <div className="rooms"> 
        <p>{Bed} <span>{Bold}</span></p>
        <p>{Path}<span>{Bold}</span> </p>

        </div>
        <div className="Area">
        <p>{Area}</p>
        <p>{Floor}</p>
        <p>{Park}</p>
        
        </div>
        <hr></hr>
        <button className="visit-btn">{Visit}</button>

        </div>
        


    </div>
  )
}

export default HomeCards