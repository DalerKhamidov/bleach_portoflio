import React from "react";
import type { SkillCategory } from "../types";
import "../theme/styles.css";

interface SkillsProps {
  currentTheme: "professional" | "personal";
}

const careerSkillCategories: SkillCategory[] = [
  {
    title: "Languages",
    body: "Python (Advanced), SQL (Advanced), Java, JavaScript, Bash",
  },
  {
    title: "Frameworks & Libraries",
    body: "Spring Boot, PySpark, Pandas, NumPy, pytest",
  },
  {
    title: "Data & Cloud Platforms",
    body: "Databricks, Apache Spark, Apache Airflow, Snowflake, dbt, AWS (S3, Lambda, DynamoDB, EC2)",
  },
  {
    title: "DevOps & Infrastructure",
    body: "Docker, Terraform, Git, GitHub, CI/CD, Kubernetes",
  },
  {
    title: "HPC & Systems",
    body: "Slurm, Spack, PXE Boot, IBM Bare Metal",
  },
  {
    title: "Methodologies",
    body: "ETL/ELT, REST APIs, DevSecOps, Microservices, Agile/Scrum, Data Warehousing",
  },
];

const personalSkillCards: SkillCategory[] = [
  { title: "Dance", body: "Let's get down on it." },
  { title: "Sketching", body: "I need to learn to draw." },
  { title: "Reading", body: "Ask me my latest read." },
  { title: "Traveling", body: "I need to do better photography." },
  { title: "Photography", body: "Everything is computer." },
];

const Skills: React.FC<SkillsProps> = ({ currentTheme }) => {
  const categories = currentTheme === "professional" ? careerSkillCategories : personalSkillCards;

  return (
    <div className="skills-category-grid">
      {categories.map((cat, index) => (
        <div key={index} className={`card card-${currentTheme} skills-category-card`}>
          <h4 className={`text-${currentTheme} skills-category-title`}>{cat.title}</h4>
          <p className="skills-category-body">{cat.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
