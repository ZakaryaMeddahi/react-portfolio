import logo from '../images/logo.png'

function Header() {

    const ConatainerStyle = {
        width: '100%',
        height: '70px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 70px'
    }

    const img = {
        width: '50px'
    }

    const ul = {
        color: 'gray',
        listStyle: 'none',
        display: 'flex'
    }

    const anchorStyle = {
        textDecoration: 'none',
        color: 'gray',
    }

    return (
        <div id='home' style={ConatainerStyle}>
            <div>
                <img src={logo} alt="" style={img}/>
            </div>
            <nav>
                <ul style={ul}>
                    <li style={{paddingLeft: '20px'}}> <a href="#" style={anchorStyle}>Home</a> </li>
                    <li style={{paddingLeft: '20px'}}> <a href="#about" style={anchorStyle}>About</a> </li>
                    <li style={{paddingLeft: '20px'}}> <a href="#projects" style={anchorStyle}>Projects</a> </li>
                    <li style={{paddingLeft: '20px'}}> <a href="#contact" style={anchorStyle}>Contact me</a> </li>
                </ul>
            </nav>
        </div>
    )
}


export default Header;