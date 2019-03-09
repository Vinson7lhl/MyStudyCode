
/**
 * 样式
 */
const header_style = {
  lineHeight: '50px',
  backgroundColor:'#edeeef'
}

const Header = () => (
  <div className='testStyle' style={header_style}>
    -----------------------这里是公共头部-----------------------
    <style jsx>{
      `
      .testStyle{
        color:red;
      }
    `
    }</style>
    </div>
)

export default Header