import "./Deal.css"
const Deal = () => {
  return (

<>
    <div className="back">
    <div className="deal">
        <div className="text2">
            <h3><b>BEST DEAL</b></h3>
            <h1>Find Your Best </h1>
            <h1><b>Deal Right Now!</b></h1>


        </div>
        <div className="button-3">
            <button className="orange"> Appartment</button>
            <button className="black">Villa Hause</button>
            <button className="black">Penthause</button>

        </div>

    </div>



    <div className="find">
        <div className="descrip">
            <p>total flat space <span>185 m2</span></p>
            <hr></hr>
            <p>flor number <span> 26 th</span></p>
            <hr></hr>
            <p> number of rooms <span>4</span></p>
            <hr></hr>
            <p> Parking Availabe<span>YES</span></p>
            <hr></hr>
            <p> Bayment process<span>Bank</span></p>
        </div>
        <div>
            <img src="/images/deal-01.jpg"></img>
        </div>
        <div className="lorem">
            <h3>Extra info About property</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Aperiam, quod in? Porro doloremque voluptate saepe assumenda.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Aperiam, quod in? Porro doloremque voluptate saepe assumenda.
           </p>
           <div className="lorem-button"></div>
            <img className='img 1' src='/images/111.png'></img>
             <button>schedule a visit</button>
        </div>

    </div>

    </div>


    
    </>
    

  )
}

export default Deal