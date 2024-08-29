import "./NavBar.css"
const NavBar = () => {
  return (
    <>
     <nav className='navbar'>
      <h2 className='title'>VILLA</h2>
      
      <ul className="navbar-menu">
        <a href="#"><li className="color">Home</li></a>
        <a href="#"> <li>Properties</li></a>
        <a href="#"> <li>Property Details</li> </a>
        <a href="#"> <li> Contact Us</li></a> 
        </ul>
        <div className='right-navbar'>
        <span className="circle">
          <img className='img 1' src='/images/111.png'></img>
          </span>
                <button>schedule a visit </button>
        
     
    </div>
         
      
      </nav>
    </>
  )
}

export default NavBar