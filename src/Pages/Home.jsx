import Best from "../Components/Best/Best"
import Deal from "../Components/Deal/Deal"
import Head from "../Components/Head/Head"
import Hero from "../Components/Hero/Hero"
import NavBar from "../Components/NavBar/NavBar"
import Provide from "../Components/Provide/Provide"
import Vedio from "../Components/Vedio/Vedio"
import HomeCards from "../Components/HomeCards/HomeCards"
import Footer from "../Components/Footer/Footer"


const Home = () => {
  return (
    <div>
        <Head/>
       <NavBar/>
       <Hero/>
       <Best/>
       <Vedio/>
       <Deal/>
       <Provide/>
       <HomeCards  Img  = {"/images/property-01.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "6" Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor: 3" Park=" Parking : 6 spots" Visit="schedule a visit"/>
       <HomeCards Img  = {"/images/property-02.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "8" Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
       <HomeCards Img  = {"/images/property-03.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "5"  Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
       <HomeCards Img  = {"/images/property-04.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "5"  Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
       <HomeCards Img  = {"/images/property-05.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "7"  Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
       <HomeCards Img  = {"/images/property-06.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "6"  Path="Pathrooms : " Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>

        </div>
        
  )
}

export default Home