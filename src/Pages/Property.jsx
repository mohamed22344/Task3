import Head from "../Components/Head/Head"
import HomeCards from "../Components/HomeCards/HomeCards"
import HomeProprty from "../Components/HomeProprty/HomeProprty"
import NavBar from "../Components/NavBar/NavBar"

const Property = () => {
  return (
    <div>
      <Head/>
      <NavBar/>
        <HomeProprty  /> 
        <HomeCards Img  = {"/images/property-01.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "6" Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor: 3" Park=" Parking : 6 spots" Visit="schedule a visit" />
        <HomeCards Img  = {"/images/property-02.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "8" Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
        <HomeCards Img  = {"/images/property-03.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "5"  Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
        <HomeCards Img  = {"/images/property-04.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "5"  Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
        <HomeCards Img  = {"/images/property-05.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "7"  Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
        <HomeCards Img  = {"/images/property-06.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "6"  Path="Pathrooms : " Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit" />
        <HomeCards Img  = {"/images/property-01.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "6" Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor: 3" Park=" Parking : 6 spots" Visit="schedule a visit"/>
        <HomeCards Img  = {"/images/property-02.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "8" Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>
        <HomeCards  Img = {"/images/property-03.jpg "}  luxury= "luxry Villa" price="$2.464.000" desc = "18 old street Miami , or 97192"  Bed="Bedrooms :" Bold = "5"  Path="Pathrooms :" Area="Area : 545 m2" Floor= "Floor : 3" Park="Parking : 6 spots" Visit="schedule a visit"/>

        Property</div>
  )
}

export default Property