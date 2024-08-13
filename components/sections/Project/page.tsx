import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import heartsforpalestine from "../../../public/images/Projects/heartsforpalestine.webp";
import quranversebot from "../../../public/images/Projects/quranversebot.jpg";

interface Project {
  image: StaticImageData;
  title: string;
  skills: string[];
  github: string;
  website: string;
}

const projects: Project[] = [
  {
    image: heartsforpalestine,
    title: 'Hearts for Palestine',
    skills: ['TypeScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/Muslims-in-Tech-MIT/hearts-for-palestine',
    website: 'https://hearts-for-palestine.vercel.app/'
  },
  {
    image: quranversebot,
    title: 'Quran Verse Bot',
    skills: ['Python', 'Discord API'],
    github: 'https://github.com/Muslims-in-Tech-MIT/QuranVerseBot',
    website: 'N/A'
  }
];

const Projects: FC = () => {
  return (
    <div className="p-6 bg-brand">
      <div className="mb-8">
        <h1 className="text-5xl text-gray-800 text-center font-bold mb-3 relative group">
          Projects
        </h1>
        <p className="text-lg text-center">A showcase of our projects, including technologies used and links to GitHub repositories and live demos.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl  mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border border-gray-300 bg-white rounded-lg shadow-md">
            <Image src={project.image} alt={`${project.title} screenshot`} className="rounded-md w-full h-48 object-cover mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <div className="flex justify-between items-center mb-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub
              </a>
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Website
              </a>
            </div>
            <div className="flex flex-wrap">
              {project.skills.map((skill, i) => (
                <span key={i} className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 mb-2 p-1.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
