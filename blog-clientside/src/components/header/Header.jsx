import './header.css';


export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">Random Thoughts</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://image.freepik.com/free-vector/modern-abstract-background_1048-1003.jpg" alt="abstract-art" />
    </div>
  )
}