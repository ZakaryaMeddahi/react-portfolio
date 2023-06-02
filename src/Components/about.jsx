


function About() {

    const containerStyle = {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px'
    }

    const header = {
        color: "turquoise",
        fontSize: '40px',
        marginBottom: '40px'
    }

    const paragraph = {
        width: '600px',
        textAlign: 'center',
        lineHeight: '30px'
    }

    return (
        <div id="about" className="container" style={containerStyle}>
            <h1 style={header}>About Me</h1>
            <p style={paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quo vero repellat laboriosam iure, 
                tempora libero consequuntur cupiditate distinctio totam suscipit. 
                Eius rem harum incidunt eveniet earum vero voluptate, hic doloribus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quo vero repellat laboriosam iure, 
                tempora libero consequuntur cupiditate distinctio totam suscipit. 
                Eius rem harum incidunt eveniet earum vero voluptate, hic doloribus!
            </p>
        </div>
    );
}

export default About