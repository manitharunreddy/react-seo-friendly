import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const highlights = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces using React, TypeScript and modern CSS frameworks.",
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable server-side applications, REST APIs and business logic.",
  },
  {
    title: "Database Management",
    description:
      "Designing and managing databases with attention to performance and data consistency.",
  },
];

const journey = [
  {
    title: "Professional Experience",
    description:
      "Add your company, job title, employment dates and key responsibilities here.",
    period: "Your employment period",
  },
  {
    title: "Education",
    description:
      "Add your degree, college or university and academic achievements here.",
    period: "Your education period",
  },
];

function About() {
  return (
    <div className="overflow-hidden bg-gray-950 text-white">
      <SEO
        title="About Me | Manitharun Reddy Thallapureddy"
        description="Learn about Manitharun Reddy Thallapureddy, professional experience, development journey and technical background."
        path="/about"
      />
      {/* Page Header */}
      <section className="border-b border-gray-800 px-4 py-20 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Get To Know Me
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            About Me
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A passionate Full Stack Developer focused on building modern,
            scalable and user-friendly web applications.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex justify-center">
          <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-gray-800 bg-gray-900">
            <span className="text-7xl font-bold text-blue-500 sm:text-8xl">
              DEV
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Who I Am
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Turning Ideas Into Digital Experiences
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            I'm a Full Stack Developer passionate about developing modern web
            applications and solving real-world problems through technology.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            I enjoy working across frontend and backend technologies, creating
            clean interfaces, developing APIs and building applications that
            deliver meaningful user experiences.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            My focus is continuous learning, writing maintainable code and
            improving my development skills with every project.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
          >
            Let's Connect
          </Link>
        </div>
      </section>

      {/* What I Do */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What I Do</h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition hover:border-blue-500"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience and Education */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Experience & Education
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {journey.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-800 bg-gray-900 p-6 sm:p-8"
              >
                <p className="text-sm font-medium text-blue-400">
                  {item.period}
                </p>

                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Approach */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Philosophy
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Always Learning. Always Building.
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            I believe great software comes from curiosity, consistent learning,
            thoughtful engineering and a commitment to solving real problems.
            Every project is an opportunity to learn something new and build
            something better.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-gray-800 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gray-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
            Have an idea or an interesting opportunity? I'd love to hear from
            you.
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

export default About;
