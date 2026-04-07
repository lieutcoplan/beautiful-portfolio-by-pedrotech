import { ArrowRight, ExternalLink, GitBranchPlus, GitCommit } from "lucide-react";

const projects = [
  {
     id: 1,
     title: "Project 1",
     description: "Mon premier projet.",
     image: "#",
     tags: ["React", "TailwindCSS"],
     demoUrl: "#",
     githubUrl: "#",
  },
  {
     id: 2,
     title: "Project 2",
     description: "Mon deuxième projet.",
     image: "#",
     tags: ["Typescript", "Next.js"],
     demoUrl: "#",
     githubUrl: "#",
  },
  {
     id: 3,
     title: "Project 3",
     description: "Mon troisième projet.",
     image: "#",
     tags: ["Java", "Python"],
     demoUrl: "#",
     githubUrl: "#",
  }
]

export const ProjectsSection = () => {
  return (
  <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
        Mes<span className="text-primary"> Projets</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Voici mes projets
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, key) => (
                  <span 
                    key={key}
                    className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            

              <h3 className="text-xl font-semibold mb-2"> {project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.demoUrl} 
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  > 
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                  >
                    <svg width="19" height="19" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_730_27136">
                        <rect width="98" height="96" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          className="cosmic-button w-fit flex items-center mx-auto gap-2" 
          href="#"
          target="_blank"
        >
          Voir Mon GitHub <ArrowRight size={16} />
        </a>
      </div>

    </div>
  </section>
  );
};