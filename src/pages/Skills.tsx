import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "React Router",
    ],
  },
  {
    title: "Backend Development",
    description: "Building server-side applications and REST APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
  },
  {
    title: "Database",
    description: "Managing structured and unstructured application data.",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Database Design"],
  },
  {
    title: "Tools & Platforms",
    description: "Development tools and deployment platforms.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "GitHub Pages"],
  },
];

const workflow = [
  "Understanding project requirements",
  "Planning application architecture",
  "Developing responsive user interfaces",
  "Building backend APIs",
  "Database integration",
  "Testing and deployment",
];

function Skills() {
  return (
    <div className="overflow-hidden bg-gray-950 text-white">
      <SEO
        title="Technical Skills | Manitharun Reddy Thallapureddy"
        description="Explore my frontend, backend, database and full stack development skills."
        path="/skills"
      />
      {/* Page Header */}
      <section className="border-b border-gray-800 px-4 py-20 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My Technical Expertise
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Technical Skills
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Technologies, tools and development skills I use to build modern,
            scalable and user-friendly web applications.
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-blue-500 sm:p-8"
            >
              <h2 className="text-xl font-bold sm:text-2xl">
                {category.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-blue-500 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Development Workflow */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              My Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Development Workflow
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              I follow a structured development process to create reliable,
              maintainable and user-friendly applications.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 font-bold text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm font-medium text-gray-200 sm:text-base">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning and Growth */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Continuous Improvement
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Always Exploring New Technologies
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Technology evolves continuously. I enjoy learning new tools,
            exploring better development practices and improving application
            performance and user experience.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gray-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Build Something Together
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
            Looking for a developer for your next project? Let's discuss how we
            can work together.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Skills;
