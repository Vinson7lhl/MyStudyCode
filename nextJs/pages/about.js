import Link from 'next/link'

const About = () => (
    <div>
      <p>About page</p>
      <Link href='/index'>
        <button>跳转至首页</button>
      </Link>
    </div>
  )
  
  export default About