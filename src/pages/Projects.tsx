import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const projects = [
  {
    title: "E-commerce Website",
    category: "Full Stack Development",
    description:
      "A modern e-commerce platform with product browsing, shopping cart, user authentication and order management.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Developer Portfolio",
    category: "Frontend Development",
    description:
      "A responsive personal portfolio showcasing developer experience, technical skills and professional projects.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "Task Management Application",
    category: "Full Stack Development",
    description:
      "A task management application designed to organize daily activities, manage tasks and improve productivity.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    title: "REST API Application",
    category: "Backend Development",
    description:
      "A backend application featuring RESTful endpoints, authentication, validation and database integration.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/",
    demo: "",
  },
];

function Projects() {
  return (
    <div className="overflow-hidden bg-gray-950 text-white">
      <SEO
        title="Projects | Manitharun Reddy Thallapureddy"
        description="Explore my web development projects, technologies, GitHub repositories and live demonstrations."
        path="/projects"
      />
      {/* Page Header */}
      <section className="border-b border-gray-800 px-4 py-20 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My Work
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Projects
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Explore some of my development projects, technical experiments and
            applications built using modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Featured Work</h2>

          <p className="mt-3 text-gray-400">
            A selection of projects demonstrating my development skills and
            problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500 sm:p-8"
            >
              {/* Project Number */}
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-blue-500/60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <h3 className="mt-7 text-2xl font-bold transition group-hover:text-blue-400">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 leading-8 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap gap-4 border-t border-gray-800 pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-300 transition hover:text-blue-400"
                >
                  GitHub →
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gray-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Have an Interesting Project?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
            I'm always interested in exploring new ideas, collaborating on
            projects and creating meaningful digital experiences.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Projects;
