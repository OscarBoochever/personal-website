// Services configuration
// Edit this file to update service offerings

export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "software",
    icon: "Code2",
    title: "Custom Software & Web Development",
    description:
      "Websites, web apps, internal tools, and platforms tailored for government agencies and nonprofits. Built with modern technologies to solve real operational challenges.",
  },
  {
    id: "data-analysis",
    icon: "BarChart3",
    title: "Data and Policy Analysis",
    description:
      "Quantitative analysis to inform policy decisions, program evaluation, and strategic planning. Turning complex data into actionable insights.",
  },
  {
    id: "visualization",
    icon: "LineChart",
    title: "Data Visualization & Transparency Dashboards",
    description:
      "Interactive dashboards and public-facing data tools that make complex data accessible and actionable for stakeholders and the public.",
  },
  {
    id: "consulting",
    icon: "Users",
    title: "Consulting & Strategic Advisory",
    description:
      "Stakeholder engagement, needs assessment, and implementation planning for government initiatives. Bridging the gap between policy goals and practical execution.",
  },
];
