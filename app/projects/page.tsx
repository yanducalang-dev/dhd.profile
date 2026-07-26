"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink
} from "lucide-react";

import { projects } from "@/data/projects";

const categories = [
  "All",
  ...Array.from(
    new Set(projects.map((project) => project.category))
  )
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="all-projects-page">
      <section className="all-projects-shell">
        <Link href="/#projects" className="back-home-link">
          <ArrowLeft size={18} />
          Back to Homepage | Featured Projects
        </Link>

        <header className="all-projects-header">
          <div>
            <span className="projects-eyebrow">
              Portfolio archive
            </span>

            <h2>All Projects</h2>

            <p>
              Explore the complete collection of enterprise
              applications, payroll modules, reporting tools,
              websites, and internal systems.
            </p>
          </div>

          <span className="project-total">
            {filteredProjects.length} Projects
          </span>
        </header>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="all-project-grid">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                className={`modern-project-card accent-${project.accent}`}
                key={project.slug}
              >
                <div className="project-card-header">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-visual">
                  <span className="project-main-icon">
                    <Icon />
                  </span>

                  <div className="project-screen">
                    <span className="screen-topbar" />

                    <div className="screen-layout">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="screen-table">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                <div className="modern-project-content">
                  <span className="project-subtitle">
                    {project.subtitle}
                  </span>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-card-footer">


                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-demo-btn"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}

                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}