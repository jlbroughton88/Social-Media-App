import Navbar from "./comps/navbar";
import fetch from "isomorphic-unfetch";



class Profile extends React.Component {

    static async getInitialProps() {
        const res = await fetch("http://localhost:5000/api/user/personal")
        const data = await res.json()
        console.log(data)
        return {
            user: data.userName
        };
    }

    urlCheck = () => {
    if (typeof window == "undefined") {
        return false;
    }

    if (window.location.hash === "#_=_") {
        history.replaceState
            ? history.replaceState(null, null, window.location.href.split("#")[0])
            : window.location.hash = "";
    }
}
    render() {
        this.urlCheck()

        return (
            <div>
                <Navbar />
                <h1>{props.user}</h1>
            </div>
        )
    }


}






export default Profile;