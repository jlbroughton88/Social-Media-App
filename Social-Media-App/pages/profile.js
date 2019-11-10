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
const Profile = (props) => {
    urlCheck();
    console.log(props)
    return (
        <div>
            <Navbar />
            Profile
            <h1>
                {props.user.userName}
            </h1>

        </div>
    )

}

Profile.getInitialProps = async ({ req, res }) => {
    // console.log(req)
    // if (req) {
    //     res.redirect("/auth/login")
    // } else {
    //     console.log("Getting initial props")
    //     const result = await fetch("http://localhost:5000/api/user/personal")
    //     console.log("Got initial props")
    //     const data = await result.text()
    //     const parsedData = JSON.parse(data)
    //     return {
    //         user: parsedData.userName
    //     }
    // }
    // console.log(req.user)
    return { user: req.user }
}

export default Profile;