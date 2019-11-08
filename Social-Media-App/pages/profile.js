import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";

const urlCheck = () => {
    if (typeof window == "undefined") { return false }
    if (window.location.hash === "#_=_") {
        history.replaceState
            ? history.replaceState(null, null, window.location.href.split("#")[0])
            : window.location.hash = "";
    }
}

// const fetchThis = () => {
//     fetch("http://localhost:5000/api/user/personal")
//     .then(r => r.json())
//     .then(data => console.log(data))
// }
urlCheck();
const Profile = props => (
        <div>
            <Navbar />
            Profile
                {/* <h1>{props.user}</h1> */}
        </div>
)
    


// Not correct
Profile.getInitialProps = async function(){
     console.log("fetching")
    const res = await fetch("http://localhost:5000/api/user/personal")
     console.log("fetched")
    const data = await res.json()
     console.log(data)
    return { 
        user: data.userName 
    }
}

export default Profile;