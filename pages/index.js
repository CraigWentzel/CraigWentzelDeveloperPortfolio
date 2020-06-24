//Import the Link API to support client-side navigation
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'
import myImage1 from '../components/Craig'

/* Using My Layout to outline the page and to add in static image to the home page*/

export default () => (

  <Layout>
      <h1>Craig Wentzel Developer Portfolio</h1><br></br>
      <Image src="/static/Craig.jpg/" thumbnail/><br></br><br></br>

     <table>
        <th><h3>Contact:</h3></th>
         <tr></tr>
         <tr></tr>
         <tr><b>Mobile:</b>
         <td>+27 82 360 2796</td>
         </tr>
          <tr><b>Email:</b>
         <td>dinkman1000@gmail.com</td>
       </tr>
       <tr><b>LinkedIn:</b>
         <td><Link href="//www.linkedin.com/in/craig-wentzel-588a261b/"><a>LinkedIn</a></Link></td>
       </tr>
       <tr><b>GitHub:</b>
         <td><Link href="//github.com/CraigWentzel"><a>GitHub Profile</a></Link></td>
       </tr>
       <tr><b>Instagram:</b>
         <td><Link href="//www.instagram.com/wentzelcraig/?hl=en"><a>Instagram</a></Link></td>
       </tr>
       <tr><b>Twitter:</b>
         <td><Link href="//twitter.com/home?lang=en@dinkman101"><a> @dinkman101</a></Link></td>
       
       </tr>
     
     </table>   
  </Layout>
)