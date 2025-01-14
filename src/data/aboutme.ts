export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Dr. Michael Jankowski",
  title: "Data & Political Scientist",
  institution: "Federal German Chancellery",
  // Note that links work in the description
  description:
    "<b>Welcome!</b><br><br>I'm a political scientist by training and currently work as a Data Scientist in the Data Lab of the German Federal Chancellery. In this role, I am contributing to strengthening evidence-based policy making in politics as well as the digitalization of the public administration.<br><br>Previously, I worked as political scientist in academia where I mostly focused on using quantitative methods for analyzing party and voter behavior. I received my PhD from the University of Oldenburg for a collection of papers which analyzed different dimensions of voter, candidate and party interaction in multi-level systems. Despite being no longer employed at an university, I continue to do some political science research. My current research is focused on populism, candidate selection, and political representation.<br><br>In December 2024 my co-edited textbook <i>Populism. An Introduction</i> was published by SAGE. It is the first comprehensive textbook for teaching populism, with a special focus on empirical populism research. You can order it directly from <a href='https://uk.sagepub.com/en-gb/eur/populism/book286771' target='_blank'>SAGE</a>, <a href='https://www.amazon.de/Populism-Introduction-Robert-Huber/dp/1529669863' target='_blank'>Amazon</a> or your local book store.<br><br>When it comes to Data Science, I have strong interest in NLP and causal analysis. I also have a strong expertise in survey research. Most of my code is written in R and I have created various web apps using R Shiny. However, I am constantly learning new languages including Python and React.",
  email: "michael.jankowski@posteo.de",
  imageUrl:
    "https://michael-jankowski.de/wp-content/uploads/2025/01/20230703_124707-scaled.jpg",
  googleScholarUrl: "https://scholar.google.de/citations?user=qBCi9GkAAAAJ&hl",
  linkedinUsername: "michael-jankowski-44288a294",
  twitterUsername: "michaelj505",
  // altName: "",
  // secretDescription: "I like dogs.",
};
