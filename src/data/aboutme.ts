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
  title: "Manager",
  institution: "PricewaterhouseCoopers Germany",
  description: `
    <b>Welcome!</b><br><br>
    I'm a political scientist who loves diving into data and numbers. These days, I'm working as a Manager at PwC Germany, helping bring AI projects to life in the public sector. Before that, I worked as Team Lead of the Data Science and AI team at the German Chancellery's Datalab. And way back when, I spent my time in academia exploring how voter, candidates and parties interact. For a collection of some of my papers, I got an PhD from the University of Oldenburg in 2017.<br><br>Even though I've left the ivory tower behind, I still do some research on populism, candidate selection, and political representation. That's pretty much why this website keeps getting updates!<br><br>
    For example, in December 2024, my co-edited textbook <i>Populism. An Introduction</i> was published by SAGE. It's the first comprehensive textbook for teaching populism, emphasizing empirical research. You can order it from 
    <a href='https://uk.sagepub.com/en-gb/eur/populism/book286771' target='_blank'>SAGE</a>, 
    <a href='https://www.amazon.de/Populism-Introduction-Robert-Huber/dp/1529669863' target='_blank'>Amazon</a>, 
    or your local bookstore.<br><br>
    My main Data Science interests lie in NLP, causal analysis, and survey research. Most of my code is in R, and I've built various R Shiny web apps, although I'm also expanding my skill set by learning Python and React.<br><br>
    I have also conducted several workshops on web scraping, large language models (LLMs), survey experiments, and data visualization—helping researchers and practitioners refine their skills in data analysis and technology.<br><br>
    Discover a brief overview of my work history and publications below. If you have any questions or just want to connect, I'd love to hear from you!<br><br>
    <img src="/images/banner.jpg" alt="Banner Image" style="max-width: 100%; height: auto;">
  `,
  email: "michael.jankowski@posteo.de",
  imageUrl: "/images/pic.png",
  googleScholarUrl: "https://scholar.google.de/citations?user=qBCi9GkAAAAJ&hl",
  linkedinUsername: "michael-jankowski-44288a294",
  twitterUsername: "michaelj505",
  // altName: "",
  // secretDescription: "text goes here",
};