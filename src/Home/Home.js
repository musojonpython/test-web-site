import rasm from "../images/2.1.jpg"
import "./Home.css"


function Home(props) {
    
    return (
        <>
        <p style={{color: 'aqua'}}>Salom hammaga {props.name} Yoshi {props.age}</p> 
        <h1 style={{backgroundColor:'red'}}>Bu mening home page sahifam </h1>

        </>
    )
}

export default Home