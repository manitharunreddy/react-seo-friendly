import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Branding */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Developer<span className="text-blue-500">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7">
              Building modern, responsive and scalable web applications with
              passion and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h2>

            <ul className="grid grid-cols-2 gap-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Connect With Me
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-blue-500 hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-lg border border-gray-700 px-4 py-2 text-sm transition hover:border-blue-500 hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm">
          <p>© {currentYear} Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
