"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Github, Link2, Search } from "lucide-react";

export type PortfolioProject = {
  name: string;
  type: string;
  description: string;
  stack: string;
  category: string;
  href: string;
  liveHref?: string;
};

function projectAnchor(name: string) {
  return `project-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

export default function WorkShelf({ projects }: { projects: PortfolioProject[] }) {
  const [category, setCategory] = useState("All work");
  const [liveOnly, setLiveOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [filtersReady, setFiltersReady] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const [copiedProject, setCopiedProject] = useState("");
  const [projectLinkMessage, setProjectLinkMessage] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const categories = useMemo(() => ["All work", ...new Set(projects.map((project) => project.category))], [projects]);
  const normalizedQuery = query.trim().toLowerCase();
  const hasActiveFilters = category !== "All work" || liveOnly || Boolean(normalizedQuery);
  const filtered = projects.map((project, index) => ({ project, index })).filter(({ project }) => {
    const matchesCategory = category === "All work" || project.category === category;
    const matchesLive = !liveOnly || Boolean(project.liveHref);
    const repository = project.href.split("/").filter(Boolean).at(-1) ?? "";
    const searchable = `${project.name} ${repository} ${project.type} ${project.description} ${project.stack}`.toLowerCase();
    return matchesCategory && matchesLive && searchable.includes(normalizedQuery);
  });

  useEffect(() => {
    function syncFromUrl() {
      const params = new URLSearchParams(window.location.search);
      const requestedCategory = params.get("type") ?? "";
      setCategory(categories.includes(requestedCategory) ? requestedCategory : "All work");
      setLiveOnly(params.get("live") === "1");
      setQuery((params.get("q") ?? "").slice(0, 80));
      setFiltersReady(true);
    }

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [categories]);

  useEffect(() => {
    if (!filtersReady) return;
    const url = new URL(window.location.href);
    if (normalizedQuery) url.searchParams.set("q", query.slice(0, 80));
    else url.searchParams.delete("q");
    if (category !== "All work") url.searchParams.set("type", category);
    else url.searchParams.delete("type");
    if (liveOnly) url.searchParams.set("live", "1");
    else url.searchParams.delete("live");
    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== nextUrl) {
      window.history.replaceState(null, "", nextUrl);
    }
  }, [category, filtersReady, liveOnly, normalizedQuery, query]);

  async function shareFilteredLink() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: `Selected projects · ${document.title}`, url });
        setShareMessage("Link shared");
      } else {
        await navigator.clipboard.writeText(url);
        setShareMessage("Link copied");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(url);
        setShareMessage("Link copied");
      } catch {
        setShareMessage("Could not share right now");
      }
    }
    window.setTimeout(() => setShareMessage(""), 1800);
  }

  async function copyProjectLink(name: string) {
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = projectAnchor(name);
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopiedProject(name);
      setProjectLinkMessage(`Direct link copied for ${name}.`);
    } catch {
      setCopiedProject("");
      setProjectLinkMessage(`Could not copy a direct link for ${name}.`);
    }
    window.setTimeout(() => {
      setCopiedProject("");
      setProjectLinkMessage("");
    }, 1800);
  }

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
        <div aria-label="Filter projects by type or live demo availability" className="work-filters" role="group">
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
          <button
            aria-pressed={liveOnly}
            className="filter-button"
            onClick={() => setLiveOnly((current) => !current)}
            type="button"
          >
            Live demos
          </button>
        </div>
        <label className="project-search">
          <Search aria-hidden="true" size={16} />
          <span className="visually-hidden">Search project names, repository names, or tools</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            maxLength={80}
            placeholder="Search projects, repos, or tools"
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
        {hasActiveFilters && (
          <button className="share-filter-link" onClick={shareFilteredLink} type="button">
            {shareMessage || "Share filtered work"}
          </button>
        )}
      </p>
      {filtered.length ? (
        <div className="project-grid">
          {filtered.map(({ project, index }) => (
            <article className="project" id={projectAnchor(project.name)} key={project.name}>
              <div className="project-topline">
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{project.type}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-footer">
                <span className="project-stack">{project.stack}</span>
                <div className="project-links">
                  <button
                    aria-label={copiedProject === project.name ? `Direct link copied for ${project.name}` : `Copy direct link to ${project.name}`}
                    className="project-link project-permalink"
                    onClick={() => copyProjectLink(project.name)}
                    type="button"
                  >
                    <Link2 aria-hidden="true" size={15} /> {copiedProject === project.name ? "Copied" : "Copy link"}
                  </button>
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
          <button onClick={() => { setQuery(""); setCategory("All work"); setLiveOnly(false); }} type="button">
            Reset filters
          </button>
        </div>
      )}
      <p aria-live="polite" className="visually-hidden" role="status">{projectLinkMessage}</p>
    </>
  );
}
