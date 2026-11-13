import assert from "node:assert/strict";
import test from "node:test";
import { matchesPortfolioProject } from "../src/lib/portfolio-search.mjs";

const projects = [
  { name: "CineScope", type: "Movie discovery", description: "Search films", stack: "Django · MySQL", category: "Media", href: "https://github.com/example/cinescope", liveHref: "https://example.com" },
  { name: "JobMail Tracker", type: "Inbox automation", description: "Track applications", stack: "Python · Gmail API", category: "Automation", href: "https://github.com/example/jobmail-tracker" },
];

test("search includes category and repository names", () => {
  assert.equal(matchesPortfolioProject(projects[0], " media ", "All work", false), true);
  assert.equal(matchesPortfolioProject(projects[1], "jobmail-tracker", "All work", false), true);
});

test("category and live-only filters narrow discovery independently", () => {
  assert.equal(matchesPortfolioProject(projects[0], "", "Media", false), true);
  assert.equal(matchesPortfolioProject(projects[1], "", "Media", false), false);
  assert.equal(matchesPortfolioProject(projects[1], "", "All work", true), false);
});
