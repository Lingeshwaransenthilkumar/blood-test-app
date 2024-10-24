import "./navbar.css";

function Navbar(){
    const date = new Date().toLocaleDateString().split('/').join('-');
    const day = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    const time = new Date().toLocaleTimeString();
    return(
        <>
         <nav>
            <div className="time">
                <h4>{day}</h4>
                <h4>{date}</h4>
                <h4>{time}</h4>
            </div>
         </nav>
        </>
    )
}

export default Navbar;