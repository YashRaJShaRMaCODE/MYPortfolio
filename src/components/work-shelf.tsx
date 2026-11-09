"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, Search } from "lucide-react";

export type PortfolioProject = {
  name: string;
  type: string;
  description: string;
  stack: string;
  category: string;
  href: string;
  liveHref?: string;
};

export default function WorkShelf({ projects }: { projects: PortfolioProject[] }) {
  const [category, setCategory] = useState("All work");
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const categories = ["All work", ...new Set(projects.map((project) => project.category))];
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = projects.map((project, index) => ({ project, index })).filter(({ project }) => {
    const matchesCategory = category === "All work" || project.category === category;
    const searchable = `${project.name} ${project.type} ${project.description} ${project.stack}`.toLowerCase();
    return matchesCategory && searchable.includes(normalizedQuery);
  });

  useEffect(() => {
    function handleSearchShortcut(event: KeyboardEvent) {
      const target = event.target;
      const isEditing = target instanceof HTMLElement && (
        target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)
      );

      if (event.key === "/" && !isEditing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key === "Escape" && target === searchRef.current && query) {
        setQuery("");
      }
    }

    window.addEventListener("keydown", handleSearchShortcut);
    return () => window.removeEventListener("keydown", handleSearchShortcut);
  }, [query]);

  return (
    <>
      <div className="work-tools">
        <div aria-label="Filter projects by type" className="work-filters" role="group">
          {categories.map((item) => (
            <button
              aria-pressed={category === item}
              className="filter-button"
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search aria-hidden="true" size={16} />
          <span className="visually-hidden">Search selected projects</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or tools"
            ref={searchRef}
            type="search"
            value={query}
          />
          <span aria-hidden="true" className="search-shortcut"><kbd>/</kbd></span>
          {query && (
            <button aria-label="Clear project search" onClick={() => setQuery("")} type="button">
              Clear
            </button>
          )}
        </label>
      </div>
      <p aria-live="polite" className="result-count">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>
      {filtered.length ? (
        <div className="project-grid">
          {filtered.map(({ project, index }) => (
            <article className="project" key={project.name}>
              <div className="project-topline">
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{project.type}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <span className="project-stack">{project.stack}</span>
                <div className="project-links">
                  {project.liveHref && (
                    <a className="project-link" href={project.liveHref} rel="noreferrer" target="_blank">
                      Visit live <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  )}
                  <a
                    aria-label={`View ${project.name} source code on GitHub`}
                    className="project-link"
                    href={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Github aria-hidden="true" size={15} />
                    Source <ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-projects">
          <p>{query.trim() ? `No projects match “${query.trim()}”.` : "No projects in this category yet."}</p>
          <button onClick={() => { setQuery(""); setCategory("All work"); }} type="button">
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
