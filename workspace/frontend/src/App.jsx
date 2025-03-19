import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import About from './components/about/about'
import Chat from './components/chat/chat'
import'./App.css'


function App() {
    return(
        <>
            <Navbar/>
            <Profile/>
            <Chat/>
            <About/>
            <div id="projects">
                <h2>Projects</h2>
                <Projects name="ECO Server" description = "Chess server in c" github = "https://github.com/aldenbaughman/Extreme-Chess-Online"/>
            </div>
            <div id = "exp">
            <Experiences 
                title="Full Stack Dev" 
                info="Google, DFwef, dsfwef" 
                dates="1230 - 1560" 
                bullets={["wefwef 1", "wef 2", "wefwef 3"]} />
            </div>
        </>
    )
}

export default App