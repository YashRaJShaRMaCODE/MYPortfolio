/** @typedef {{ name: string, type: string, description: string, stack: string, category: string, href: string, liveHref?: string }} SearchableProject */

/** @param {SearchableProject} project */
export function matchesPortfolioProject(project, query, category, liveOnly) {
  const matchesCategory = category === "All work" || project.category === category;
  const matchesLive = !liveOnly || Boolean(project.liveHref);
  const repository = project.href.split("/").filter(Boolean).at(-1) ?? "";
  const searchable = `${project.name} ${repository} ${project.type} ${project.description} ${project.stack} ${project.category}`.toLowerCase();
  return matchesCategory && matchesLive && searchable.includes(query.trim().toLowerCase());
}
