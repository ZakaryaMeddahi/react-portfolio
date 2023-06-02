

function Body() {

    const bodyStyle = {
        height: 'calc(100vh - 70px)',
        padding: '100px 11%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        wrap: 'wrap'
    }

    const imageContainer = {
        width: '140%',
        height: 'calc(100vh - 120px)',
        position: 'absolute',
        top: '-10px',
        left: '-50px',
        zIndex: '-1'
    }

    const background = {
        width: '100%',
        height: '100%',
        borderRadius: '0 50%',
        background: 'linear-gradient(#80008095, turquoise)',
        position: 'absolute',
        transform: 'rotate(5deg)'
    }

    const cv = {
        width: '50%',
        paddingRight: '40px'
    }

    const h1 = {
        color: 'rgb(216, 213, 210)',
        textShadow: '1px 1px 10px gray',
        marginBottom: '20px'
    }

    const h2 = {
        color: 'rgb(129, 129, 129)',
        textShadow: '1px 1px 10px gray',
        marginBottom: '10px'
    }

    const par = {
        color: 'rgb(71, 71, 71)',
        textShadow: '1px 1px 10px gray',
        lineHeight: '30px'
    }

    const img = {
        width: '380px',
        borderRadius: '40px',
        boxShadow: '1px 1px 10px white',
        transform: 'rotate(-1.5deg)',
    }

    const circle1 = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'linear-gradient(#80008095, turquoise)',
        position: 'absolute',
        top: '-20px',
        left: '40px'
    }

    const circle2 = {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(#80008095, turquoise)',
        position: 'absolute',
        top: '50px',
        right: '100px',
    }

    return (
        <div id='home' style={{position: 'relative', overflow: 'hidden'}}>
            <div style={imageContainer}>
                <div style={background}></div>
                {/* <img src={image} alt="" style={img}/> */}
            </div>
            
            <div style={bodyStyle}>
                <div style={cv}>
                    <h1 style={h1}>Zakarya Meddahi</h1>
                    <h3 style={h2}>Software Developer</h3>
                    <p style={par}>coding is not a Science, it's Art</p>
                </div>
                <div>
                    <img src= 'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0' alt="" style={img}/>
                </div>
            </div>

            <div style={circle1}></div>
            <div style={circle2}></div>
            
        </div>
    )
}

export default Body;