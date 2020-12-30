import React from "react";
import Link from "next/link";

function IndexPage(props) {
  return (
    <div>
      <h1>Blog list</h1>
      <ul>
        {props.blogs.map((blog, idx) => {
          return (
            <li key={blog.id}>
              <Link href={`/blog/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

    // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}

export default IndexPage;
