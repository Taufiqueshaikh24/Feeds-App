

export default function Footer(){

    let date = new Date().getFullYear()
     return (
        <h3 className="footer"> Feeds App &copy; {date}</h3>
    )
}