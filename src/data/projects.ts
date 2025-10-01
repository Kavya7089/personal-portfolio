import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Mentor-Match: a platform for connecting mentors and mentees",
    description: "A platform that connects mentors and mentees for personalized learning experiences.",
    technologies: ["React", "Node.js", "Express",  "Tailwind CSS", "Groq AI", "web3:backend for NFTs transactions"],
    images: [
      "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
      "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg",
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
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
      "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg",
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
    ],
    github: "https://github.com/Kavya7089/Tradiverse",
    live: "https://tradiverse-ethnoverse.netlify.app/",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing my projects and skills. Features 3D animations, interactive elements, and responsive design.",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    images: [
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg"
    ],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio-demo.example.com",
    featured: true
  }
];