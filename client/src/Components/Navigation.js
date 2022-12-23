import Homepage from "../pages/Homepage"
import Building from "../pages/Building"
import Archive from "../pages/Archive"



const Navigation = (props) => {
  
    if(props.pageView === 'Homepage'){
       return <Homepage/>
       
    }
    else if(props.pageView === 'Building'){
       return<Building/>
    }
    else if (props.pageView === 'Archive'){
       return <Archive/>
    }
   
   }



export default Navigation