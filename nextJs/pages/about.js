import Link from 'next/link'
import LinkButton from '../comp/linkButton'

const About = () => (
    <div>
      <p>About page</p>
      <Link href='/index'>
        <button>跳转至首页</button>
      </Link>
      <Link href='/index'>
        <LinkButton></LinkButton>
      </Link>
    </div>
  )
  
  export default About