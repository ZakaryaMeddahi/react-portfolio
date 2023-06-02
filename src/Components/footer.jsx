import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

function Footer() {

    const footerStyle = {
        background: 'linear-gradient(to left, #80008020, turquoise)',
        padding: '50px 70px'
    }

    const navAnchorStyle = {
        color: 'gray',
        textDecoration: 'none'
    }

    const socialAnchorStyle = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    }

    const ulStyle = {
        listStyle: 'none',
        marginBottom: '20px'
    }

    const liStyle = {
        paddingLeft: '20px',
        marginBottom: '10px'
    }

    const rightsParagraph = {
        textAlign: 'center',
        marginTop: '20px'
    }

    const socialMedia = {
        listStyle: 'none'
    }

    const userName = {
        color: 'blueviolet',
        fontSize: '17px',
        paddingLeft: '5px',
        position: 'relative',
        top: '-2px'
    }

    return (
        <div id='contact' style={footerStyle}>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <ul style={ulStyle}>
                    <li style={liStyle}> <a href="#home" style={navAnchorStyle}>Home</a> </li>
                    <li style={liStyle}> <a href="#about" style={navAnchorStyle}>About</a> </li>
                    <li style={liStyle}> <a href="#projects" style={navAnchorStyle}>Projects</a> </li>
                </ul>
                <ul style={socialMedia}>
                    <li style={liStyle}> <a href="https://www.facebook.com/profile.php?id=100011299260791" style={socialAnchorStyle}> <AiFillFacebook style={{color: '#3B00DB', fontSize: '20px'}} /> <span style={userName}>Zakaria Zaki</span> </a> </li>
                    <li style={liStyle}> <a href="" style={socialAnchorStyle}> <AiFillInstagram style={{color: '#800080', fontSize: '20px'}} /> <span style={userName}>@zaki03205</span> </a> </li>
                    <li style={liStyle}> <a href="https://github.com/ZakaryaMeddahi" style={socialAnchorStyle}> <AiFillGithub style={{color: 'black', fontSize: '20px'}} /> <span style={userName}>ZakaryaMeddahi</span> </a> </li>
                </ul>
            </div>
            <hr style={{color: 'purple'}}/>
            <p style={rightsParagraph}>All Rights Reserved &copy;</p>
        </div>
    )
}

export default Footer