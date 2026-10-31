import { useState } from "react";
import SEO from "../components/SEO";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const recipient = "your-email@example.com";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="overflow-hidden bg-gray-950 text-white">
      <SEO
        title="Contact Me | Manitharun Reddy Thallapureddy"
        description="Get in touch with Manitharun Reddy Thallapureddy for full stack development opportunities, collaborations and projects."
        path="/contact"
      />
      {/* Page Header */}
      <section className="border-b border-gray-800 px-4 py-20 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Contact Me
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Have a project, opportunity or just want to connect? I'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Contact Information */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Let's Connect
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let's Discuss Your Next Project
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Whether you're looking for a developer, have an interesting project
            or want to discuss technology, feel free to reach out.
          </p>

          <div className="mt-10 space-y-6">
            {/* Email */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
              <p className="text-sm text-gray-400">Email Address</p>

              <a
                href="mailto:your-email@example.com"
                className="mt-2 inline-block break-all font-semibold text-white transition hover:text-blue-400"
              >
                your-email@example.com
              </a>
            </div>

            {/* Location */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
              <p className="text-sm text-gray-400">Location</p>

              <p className="mt-2 font-semibold text-white">
                Your City, Your Country
              </p>
            </div>

            {/* Social Links */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
              <p className="text-sm text-gray-400">Social Profiles</p>

              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-400 hover:text-blue-300"
                >
                  GitHub →
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-400 hover:text-blue-300"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Send Me a Message</h2>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Fill out the form below to get in touch.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
                className="w-full rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-y rounded-lg border border-gray-700 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
