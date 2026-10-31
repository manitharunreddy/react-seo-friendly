import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const siteUrl = "https://manitharunreddy.github.io/react-seo-friendly";

const pages: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Full Stack Developer | Manitharun Reddy Thallapureddy",
    description:
      "Explore the portfolio of Manitharun Reddy Thallapureddy, a Full Stack Developer specializing in modern web applications.",
  },
  "/about": {
    title: "About Me | Manitharun Reddy Thallapureddy",
    description:
      "Learn about Manitharun Reddy Thallapureddy, professional experience, development journey and technical background.",
  },
  "/skills": {
    title: "Technical Skills | Manitharun Reddy Thallapureddy",
    description:
      "Explore my frontend, backend, database and full stack development skills.",
  },
  "/projects": {
    title: "Projects | Manitharun Reddy Thallapureddy",
    description:
      "Explore my web development projects, technologies, GitHub repositories and live demonstrations.",
  },
  "/contact": {
    title: "Contact Me | Manitharun Reddy Thallapureddy",
    description:
      "Get in touch with Manitharun Reddy Thallapureddy for full stack development opportunities, collaborations and projects.",
  },
};

export async function prerender(data: { url: string }) {
  const pathname =
    new URL(data.url, siteUrl).pathname.replace("/react-seo-friendly", "") ||
    "/";

  const page = pages[pathname] ?? pages["/"];

  const helmetContext = {};

  let html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );

  // Remove SEO elements rendered inside the root.
  html = html
    .replace(/<title>[\s\S]*?<\/title>/g, "")
    .replace(/<meta\b[^>]*>/g, "")
    .replace(/<link\b[^>]*>/g, "");

  const canonical = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

  return {
    html,
    links: Object.keys(pages),
    head: {
      lang: "en",
      title: page.title,
      elements: new Set([
        {
          type: "meta",
          props: {
            name: "description",
            content: page.description,
          },
        },
        {
          type: "meta",
          props: {
            name: "robots",
            content: "index, follow",
          },
        },
        {
          type: "link",
          props: {
            rel: "canonical",
            href: canonical,
          },
        },
        {
          type: "meta",
          props: {
            property: "og:type",
            content: "website",
          },
        },
        {
          type: "meta",
          props: {
            property: "og:title",
            content: page.title,
          },
        },
        {
          type: "meta",
          props: {
            property: "og:description",
            content: page.description,
          },
        },
        {
          type: "meta",
          props: {
            property: "og:url",
            content: canonical,
          },
        },
        {
          type: "meta",
          props: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          type: "meta",
          props: {
            name: "twitter:title",
            content: page.title,
          },
        },
        {
          type: "meta",
          props: {
            name: "twitter:description",
            content: page.description,
          },
        },
      ]),
    },
  };
}
