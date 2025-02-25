import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";
import word from "../assets/Word Sanctuary.png"
import UHS from "../assets/Unity High School.png"
import VIDHUB from "../assets/VidHUB.png"
import Quiz from "../assets/My Quiz App.png"
import meme from "../assets/Meme Generator.png"
import style from "../assets/Style Nest.png"
import EasyBank from "../assets/Easybank landing page.png"



const projects = [
    {
      id: 1,
      title: "Word Sanctuary",
      description: "Contributed in making a web App for managing church activities",
      image: word , 
      github: "https://github.com/Johnnwabueze01/WordSanctuarySystemsNew",
      live: "https://word-sanctuary-systems-new-vup6.vercel.app/",
    },
    {
      id: 2,
      title: "Unity High School Ijoko Ota",
      description: "Contributed to create a web App for my secondard school for managing school events and activities",
      image: UHS ,
      github: "https://github.com/Johnnwabueze01/UnityHighSch-v2",
      live: "https://unity-high-sch-v2.vercel.app/",
    },
    {
      id: 3,
      title: "VIDHUB",
      description: "created a youtube clone that calls data from an API",
      image: VIDHUB ,
      github: "https://github.com/Johnnwabueze01/VIDHUB",
      live: "https://vidhub-six.vercel.app/",
    },
    {
        id: 4,
        title: "MEME GENERATOR",
        description: "created a meme generator web app that generate the latest meme image",
        image: meme , 
        github: "https://github.com/Johnnwabueze01/Meme-Generator",
        live: "https://meme-generator-zeta-wheat.vercel.app/",
      },
      {
        id: 5,
        title: "My Quiz App",
        description: "A quiz app",
        image: Quiz , 
        github: "https://github.com/Johnnwabueze01/My-Quiz-App",
        live: "https://my-quiz-app-sigma.vercel.app/",
      },
      {
        id: 6,
        title: "Style Nest",
        description: "An E-Commerce store website for buying cloths",
        image: style , 
        github: "https://github.com/Johnnwabueze01/Easy-Bank",
        live: "https://styles-nest.vercel.app/",
      },
      {
        id: 7,
        title: "Easy Bank",
        description: "Just a landing page for a banking web app",
        image: EasyBank , 
        github: "https://github.com/Johnnwabueze01/Easy-Bank",
        live: "https://easy-bank-one-beta.vercel.app/",
      },
  ];
  
  const Projects = () => {
    return (
      <section id="project" className="py-20 bg-gray-900 text-white ">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="mt-4 flex justify-between">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
                      GitHub
                      <FontAwesomeIcon icon={faCode} className="ml-2"/>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                      Live Demo
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  