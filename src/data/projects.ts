import { Project } from '../types';
import MM1 from './public/MM1.png';
import MM2 from './public/MM2.png';
import MM3 from './public/MM3.png';
import MM4 from './public/MM4.png';
import MM5 from './public/MM5.png';
import MM6 from './public/MM6.png';
import SS1 from './public/SS1.png';
import SS2 from './public/SS2.png';
import SS3 from './public/SS3.png';
import SS4 from './public/SS4.png';
import SS5 from './public/SS5.png';
import TV1 from './public/TV1.png';
import TV2 from './public/TV2.png';
import TV3 from './public/TV3.png';
import TV4 from './public/TV4.png';
import TV5 from './public/TV5.png';


export const projects: Project[] = [
  {
    id: 1,
    title: "Mentor-Match: a platform for connecting mentors and mentees",
    description: "A platform that connects mentors and mentees for personalized learning experiences.",
    technologies: ["React", "Node.js", "Express",  "Tailwind CSS", "Groq AI", "web3:backend for NFTs transactions"],
    images: [
      MM1,
      MM2,
      MM3,
      MM4,
      MM5,
      MM6
    ],
    github: "https://github.com/kavya7089/mentor-match",
    live: "https://mentor-match-corenexus.onrender.com/",
    demoVideo: "https://youtu.be/2zWgm5cvnYs?si=VsyfOaQMOKQWAE-I",
    featured: true
  },
  {
    id: 2,
    title: "AI tour guide",
    description: "An interactive AI-powered tour guide that provides users with personalized recommendations and information about various locations.",
    technologies: ["React", "TypeScript", "OpenAI API", "Tailwind CSS", "Flask","Google map api"],
    images: [
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      "https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg",
      "https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg"
    ],
    github: "https://github.com/Kavya7089/hackazards-ai",
    demoVideo: "https://youtu.be/8M7A2lD9qRo?si=ovzF1vaodBOsOF8P",
    live: "https://ai-tour-guide-demo.example.com",
    featured: true
  },
  {
    id: 3,
    title: "Tradiverse : a platform for Preserving Culture Through Technology",
    description: "a platform where you Connect with artisans from around the world, explore authentic cultural artifacts, and help preserve traditional heritage.",
    technologies: ["React", "node.js", "Tailwind CSS","Unity 3D", "jwt"],
    images: [
      TV1,
      TV2,
      TV3,
      TV4,
      TV5
    ],
    github: "https://github.com/Kavya7089/Tradiverse",
    live: "https://tradiverse-ethnoverse.netlify.app/",
    featured: false
  },
  {
    id: 4,
    title: "SkillSwap: A learning exchange platform",
    description: "A platform that connects individuals looking to learn new skills with those willing to teach them, fostering a community of knowledge sharing.",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    images: [
      SS1,
      SS2,
      SS3,
      SS4,
      SS5
    ],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio-demo.example.com",
    featured: true
  }
];