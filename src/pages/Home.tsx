import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const skills = [
  {
    title: "Frontend Development",
    description: "React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS",
  },
  {
    title: "Backend Development",
    description: "Node.js, Express.js, REST APIs",
  },
  {
    title: "Database Management",
    description: "MongoDB, MySQL, PostgreSQL",
  },
];

const projects = [
  {
    title: "E-commerce Website",
    description:
      "An online shopping platform featuring product listings, shopping cart management and a user-friendly shopping experience.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Developer Portfolio",
    description:
      "A responsive developer portfolio showcasing professional experience, technical skills and projects.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];

function Home() {
  return (
    <div className="overflow-hidden bg-gray-950 text-white">
      <SEO
        title="Full Stack Developer | Manitharun Reddy Thallapureddy"
        description="Explore the portfolio of Manitharun Reddy Thallapureddy, a Full Stack Developer specializing in modern web applications."
        path="/"
      />
      {/* Hero Section */}
      <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400 sm:text-base">
            Hello, I'm a Full Stack Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building Modern
            <span className="text-blue-500"> Web Applications</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I create scalable, responsive and user-friendly web applications
            using modern frontend and backend technologies.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/projects"
              className="rounded-lg bg-blue-600 px-7 py-3 text-center font-semibold transition hover:bg-blue-700"
            >
              View My Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-gray-700 px-7 py-3 text-center font-semibold transition hover:border-blue-500 hover:bg-gray-900"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      {/* About Preview */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Introduction
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">About Me</h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm a Full Stack Developer passionate about creating modern web
            applications, solving technical challenges and delivering meaningful
            digital experiences.
          </p>

          <Link
            to="/about"
            className="mt-6 inline-block font-semibold text-blue-400 hover:text-blue-300"
          >
            More About Me →
          </Link>
        </div>
      </section>
      {/* Technical Skills */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            What I Work With
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technical Skills
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
              >
                <h3 className="text-xl font-semibold">{skill.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {skill.description}
                </p>
              </article>
            ))}
          </div>

          <Link
            to="/skills"
            className="mt-8 inline-block font-semibold text-blue-400 hover:text-blue-300"
          >
            Explore All Skills →
          </Link>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Recent Work
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-blue-500 sm:p-8"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <Link
            to="/projects"
            className="mt-8 inline-block font-semibold text-blue-400 hover:text-blue-300"
          >
            View All Projects →
          </Link>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="border-t border-gray-800 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gray-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Let's Connect
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
            I'm always interested in discussing new projects, creative ideas and
            opportunities to build something meaningful.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
