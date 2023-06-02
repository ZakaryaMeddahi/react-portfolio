import ProjectCard from './projectCard'
import nft from '../images/nft.jpg'
import socialMedia from '../images/socialmedia.jpg'
import Stopwatch from '../images/stopwatch.jpg'
import tenesCity from '../images/tenescity.jpg'

function Project() {

    const containerStyle = {
        backgroundColor: '#F0F8FF',
        padding: '50px 0'
    }

    const header = {
        color: "turquoise",
        fontSize: '40px',
        textAlign: 'center'
    }

    const cardsContainer = {
        width: '100%',
        padding: '70px',
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: '30px',
        margin: '0 auto'
    }

    return (
        <div id='projects' style={containerStyle}>
            <h1 id="projects" style={header}>Projects</h1>
            <div style={cardsContainer}>
                <ProjectCard 
                    title= 'Nft Card Preveiw'
                    description= 'React Js'
                    collaborator= ''
                    collaboratorGithub= ''
                    link= 'https://nft-card-preveiw.netlify.app/' 
                    cardImage= {nft}
                />
                <ProjectCard 
                    title= 'Social Media Dashboard'
                    description= 'React Js'
                    collaborator= ''
                    collaboratorGithub= ''
                    link= 'https://socialmedia-dashboard-react.netlify.app/' 
                    cardImage= {socialMedia}
                />
                <ProjectCard 
                    title= 'Tenes City'
                    description= 'Html CSS Js'
                    collaborator= 'Khalil Messabih'
                    collaboratorGithub= 'https://github.com/messabih-khalil'
                    link= 'https://zakaryameddahi.github.io/TenesCity/' 
                    cardImage= {tenesCity}
                />
                <ProjectCard 
                    title= 'Stopwatch'
                    description= 'Html CSS Js'
                    collaborator= ''
                    collaboratorGithub= ''
                    link= 'https://zakaryameddahi.github.io/Stopwatch/' 
                    cardImage= {Stopwatch}
                />
            </div>
        </div>
    )
}

export default Project