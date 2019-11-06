import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";

const urlCheck = () => {
    if(typeof window == "undefined"){
        return false;
    }

    if (window.location.hash === "#_=_") {
        history.replaceState
            ? history.replaceState(null, null, window.location.href.split("#")[0])
            : window.location.hash = "";
    }
}



const Profile = props => {
    urlCheck();
    return (
        <div>
            <Navbar />
            <h1>This is your profile</h1>
        </div>
    )
}


Profile.getInitialProps = async function() {
    console.log("Trying to fetch")
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    console.log(data)
    console.log("fetched")

    return{
        user: data.user
    }
}



export default Profile;