import Link from "next/link"

const navbar = () => (
<nav>
    <Link href="/" as="/"><a>Home</a></Link>
    <Link href="/login"><a >Log In</a></Link>
    <a href="/auth/logout">Log Out</a>
    <Link href="/profile" as="/profile"><a>Profile</a></Link>

    <style jsx>{`
        nav{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            background: darkgrey;
            height: 40px;
        }

        div{
            background: #333;
            color: white;
            border: 1px #e4e4e4 solid;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            height: 70%;
            padding: 0 5px;
        }
    `}</style>
</nav>
)

// navbar.getInitialProps = async ({ req }) => {
//     console.log("THIS IS THE NAV BAR " + req + " END OF NAVBAR")
//     return{ user: req.user }
// }

export default navbar;