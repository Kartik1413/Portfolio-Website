"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id:1,
        title: "Portfolio Website",
        description: "Frontend Development",
        image: "/portfoliophoto.jpeg",
        tag: ["All", "Web Dev"],
        gitUrl: "https://github.com/sushanttx/my-portfolio",
        previewUrl: "/"
    },
    {
        id:2,
        title: "Weather APP",
        description: "Full Stack Web Development",
        image: "/weather.png",
        tag: ["All","Web Dev"],
        gitUrl: "https://github.com/Kartik1413/Weather-App.git",
        previewUrl: "/"
    },
    {
        id:3,
        title: "Stock Price Predictor",
        description: "Machine Learning Project",
        image: "/Machine-Learning.jpeg",
        tag: ["All","Machine Learning"],
        gitUrl: "https://github.com/Kartik1413/Stock-Price-Predictor.git",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) => 
        project.tag.includes(tag)
    )
  return (
    <>
        <h2 id="projects" className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>

            <ProjectTag onClick={handleTagChange} name="Web Dev" isSelected={tag === "Web Dev"}/>

            <ProjectTag onClick={handleTagChange} name="Machine Learning" isSelected={tag === "Machine Learning"}/>

        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:mb-12">
            {filteredProjects.map((project) => <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}/>)}
        </div>
    </>
  )
}

export default ProjectsSection