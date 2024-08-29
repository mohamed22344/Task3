import "./Head.css"

const Head = () => {
  return (
    <>
      <div className="head-main">

        <div className="head-part1">
            <div className="email">
                <img src="/images/email-icon.png"></img>
                <span>info@company.com</span>
            </div>
            <div className="map">
              <img src="/images/map2.png"></img>
              <span>Sunny island beach, FL 33160</span>
            </div>
        </div>
        <div className="head-icons">
            <ul>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-linkedin-in"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
            </ul>
        </div>
     </div>
     <hr></hr>

    </>

  )
}

export default Head