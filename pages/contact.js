// pages/Contact
import Layout, { siteTitle } from '../components/layout'
import Mailto from '../components/mailto'


export default function Contact({children, contact}) {
    return (
     
    <div>
     <Layout />
     <h1>Contact Page</h1>
     <Mailto />
      </div>
    )
  }