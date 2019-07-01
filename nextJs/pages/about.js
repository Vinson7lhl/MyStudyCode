import Link from 'next/link'
import LinkButton from '../comp/linkButton'

const About = () => (
    <div>
      <p>About page，我改过了</p>
      <Link href='/index'>
        <button  title="About Page">跳转至首页</button>
      </Link>
      <Link href='/index'>
        <LinkButton></LinkButton>
      </Link>
    </div>
  )
  
  export default About