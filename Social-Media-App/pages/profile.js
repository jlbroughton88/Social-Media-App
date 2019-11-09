import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";


// const urlCheck = () => {
//     if (typeof window == "undefined") { return false }
//     if (window.location.hash === "#_=_") {
//         history.replaceState
//             ? history.replaceState(null, null, window.location.href.split("#")[0])
//             : window.location.hash = "";
//     }
// }
const Profile = ( props ) => {
    console.log(props.user)
    return (
        <div>
            <Navbar />
            Profile
        {props.user.userName}
        </div>
    )

}

Profile.getInitialProps = async () => {
    const res = await fetch("http://localhost:5000/api/user/personal")
    const data = await res.json()
    return { 
        user: data 
    }
}

export default Profile;