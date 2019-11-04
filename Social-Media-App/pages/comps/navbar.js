import Link from "next/link"

const Navbar = () => (
<nav>
    <Link href="/"><a>Home</a></Link>
    <div>Log In</div>
    <div>Log Out</div>
    <Link href="/profile"><a>Profile</a></Link>

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

export default Navbar;