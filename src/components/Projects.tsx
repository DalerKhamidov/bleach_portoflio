import React from "react";
import type { SkillCategory, WorkExperience } from "../types";
import "../theme/styles.css";

interface ProjectsProps {
  currentTheme: "professional" | "personal";
}

const workIntro =
  "To engineer durable data and platform systems—from finance and banking programs including Capital One credit card initiatives through Infinitive, to HPC and cloud work aligned with General Electric’s research ecosystem via Logic Tech—and to keep shipping reliable pipelines everywhere in between.";

const experience: WorkExperience[] = [
  {
    company: "Infinitive",
    location: "Ashburn, VA",
    role: "Software Engineer",
    dates: "June 2025 – Present",
    bullets: [
      "Spearheaded refactoring of an ETL pipeline processing millions of records using Apache Airflow DAGs, ensuring data integrity and zero-downtime service continuity throughout the transition.",
      "Improved pipeline reliability via a microservices-based framework decoupling orchestration with DynamoDB and unit testing with pytest, reducing processing failures by 30%.",
      "Optimized Databricks workflows via PySpark tuning and query optimization, achieving up to 80% performance improvement over the prior implementation.",
    ],
  },
  {
    company: "Logic Tech Inc.",
    location: "Niskayuna, NY (General Electric ecosystem)",
    role: "Backend Engineer",
    dates: "January 2024 – June 2025",
    bullets: [
      "Configured and maintained HPC cluster applications for large-scale data processing; authored AWS Lambda functions and persisted output to S3, supporting hundreds of concurrent job submissions.",
      "Automated Slurm job scheduler analysis via SQL scripts validating computational mesh configurations and surfacing performance benchmarks for clients.",
      "Engineered Python scripts to optimize HPC script submissions and streamline billing workflows, reducing human errors by 30%.",
    ],
  },
  {
    company: "AON",
    location: "Remote (Spokane, WA)",
    role: "Software Engineer",
    dates: "June 2022 – December 2023",
    bullets: [
      "Designed automated ETL pipelines in Databricks on Snowflake vendor data using Snowpark, enabling scalable data warehousing across multiple downstream analytics processes.",
      "Built a scalable microservices platform using Python, Spring Boot (Java), and JavaScript, improving development efficiency by 40% and reducing operational costs.",
      "Implemented DevSecOps strategy integrating automated security testing and Terraform infrastructure-as-code into GitHub CI/CD pipelines via Docker, cutting security incidents by 50%.",
      "Developed REST API systems in Python with optimized Snowflake SQL queries supporting concurrent analytical report processing.",
    ],
  },
  {
    company: "NSF Spatiotemporal Innovation Center",
    location: "Fairfax, VA",
    role: "Software Engineer",
    dates: "August 2021 – May 2022",
    bullets: [
      "Accelerated 3 research projects by developing JavaScript front-end features, authoring internal documentation, and deploying AWS S3 integration in Python for scalable server data transfer and storage.",
      "Deployed HPC software via remote PXE-boot across 70+ IBM bare metal machines using custom Bash scripts to standardize OS configurations and optimize High Performance Computing environments.",
      "Standardized Spack package management for reproducible HPC software environments supporting weather research workloads.",
    ],
  },
];

const petProjects: SkillCategory[] = [
  {
    title: "Elden Ring NPC audio bot",
    body: "Audio bot of an NPC from Elden Ring, built with Rust.",
  },
  {
    title: "Dance the metros",
    body: "Dance in every major metro area in the US (still TBD).",
  },
  {
    title: "Peak physique",
    body: "Get the peak physique.",
  },
];

const Projects: React.FC<ProjectsProps> = ({ currentTheme }) => {
  if (currentTheme === "personal") {
    return (
      <div className="pet-projects-grid">
        {petProjects.map((item, index) => (
          <div key={index} className={`card card-${currentTheme} skills-category-card`}>
            <h4 className={`text-${currentTheme} skills-category-title`}>{item.title}</h4>
            <p className="skills-category-body">{item.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="work-experience-stack">
      <p className={`work-intro text-${currentTheme}`}>{workIntro}</p>
      {experience.map((job, index) => (
        <article key={index} className={`experience-card experience-card-${currentTheme}`}>
          <header className="experience-card-header">
            <h3 className={`experience-company text-${currentTheme}`}>
              {job.company} · {job.location}
            </h3>
            <p className="experience-role-line">
              <span className="experience-role">{job.role}</span>
              <span className="experience-dates">{job.dates}</span>
            </p>
          </header>
          <ul className="experience-bullets">
            {job.bullets.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Projects;
