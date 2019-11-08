import Link from "next/link"

const navbar = () => (
<nav>
    <Link href="/" as="/"><a>Home</a></Link>
    <Link href="/auth/login" as="/auth/login"><a>Log In</a></Link>
    <Link href="/auth/logout" as="/auth/logout"><a>Log Out</a></Link>
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

export default navbar;