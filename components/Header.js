/* Connecting to Next.js’ Link API.*/
import Link from 'next/link'

/* Defining My Link Style */

const linkStyle = {
  marginRight: 15
}

/*Defining My Header Component */

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link>
    </div>
)

export default Header