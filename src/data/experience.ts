export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2023-present",
    title: "Data Scientist",
    company: "Federal German Chancellery",
    description:
      "Strengthening evidence-based policy making of the government using modern data science approaches.",
  },
  {
    date: "2021-2022",
    title: "Professor (pro tempore)",
    company: "University of Bremen",
    description:
      "As a substitute for Prof. Dr. Philip Manow, I held the lecture on Comparative Politics and conducted several seminars.",
  },
  {
    date: "2019",
    title: "Visiting Researcher",
    company: "Southern Denmark University (Odense)",
    description:
      "Initiated a collaboration between German and Danish political scientist on the quantitative analysis of party manifestos in multi-level systems.",
  },
  {
    date: "2017-2023",
    title: "Postdoctoral Researcher",
    company: "University of Oldenburg",
    description:
      "Conducted research on party manifestos, candidate selection, populism and representation. Specialized in the use of NLP approaches as well as experimental research methods.",
  },
  {
    date: "2014-2017",
    title: "Research Associate",
    company: "University of Oldenburg",
    description:
      "Conducted research in empirical political science research, with a focus on party politics as well as quantiative methods. I also co-managed a research project on local election results funded by the State of Lower Saxony.",
    advisor: "Markus Tepe",
  },
];
