import projectImage from '../images/portfolio-2.jpg'


function ProjectCard (props) {

    const projectCard = {
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '2px 0 10px gray',
        position: 'relative'
    }

    // const overlay = {
    //     background: 'linear-gradient(#80008040, #80008010)',
    //     width: '100%',
    //     height: '54%',
    //     borderRadius: '20px 20px 0 0',
    //     position: 'absolute',
    //     top: '0',
    // }

    const h4 = {
        fontWeight: '700',
        color: 'blueviolet',
        marginBottom: '2px'
    }

    const par = {
        fontSize: '15px',
        color: 'gray',
        fontWeight: '500',
        marginBottom: '8px'
    }

    return (
        <div style={projectCard}>
            <a href={props.link} style={{textDecoration: 'none'}}>
                {/* <div style={overlay}></div> */}
                <img src={props.cardImage} alt="" style={{width: '100%', borderRadius: '20px 20px 0 0'}}/>
                <div style={{padding: '10px 20px 20px'}}>
                    <h3 style={{color: 'black', marginBottom: '10px'}}>{props.title}</h3>
                    <h4 style={h4}>Technologies:</h4>
                    <p style={par}>{props.description}</p>
                    <h4 style={h4}>Colaborators:</h4>
                    <a href={props.collaboratorGithub}> <p style={par}>{props.collaborator}</p> </a>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard;