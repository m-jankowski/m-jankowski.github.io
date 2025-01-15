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
  description: `
    <b>Welcome!</b><br><br>
    I'm a political scientist by training and currently work as a Data Scientist in the Data Lab of the German Federal Chancellery, where I help drive evidence-based policy-making and digitalize public administration.<br><br>
    Before this, I worked in academia, focusing on quantitative methods for analyzing party and voter behavior. I earned my PhD from the University of Oldenburg for a set of studies examining interactions among voters, candidates, and parties in multi-level systems. Even though I'm no longer at a university, I continue researching populism, candidate selection, and political representation.<br><br>
    In December 2024, my co-edited textbook <i>Populism. An Introduction</i> was published by SAGE. It's the first comprehensive textbook for teaching populism, emphasizing empirical research. You can order it from 
    <a href='https://uk.sagepub.com/en-gb/eur/populism/book286771' target='_blank'>SAGE</a>, 
    <a href='https://www.amazon.de/Populism-Introduction-Robert-Huber/dp/1529669863' target='_blank'>Amazon</a>, 
    or your local bookstore.<br><br>
    My main Data Science interests lie in NLP, causal analysis, and survey research. Most of my code is in R, and I've built various R Shiny web apps, although I'm also expanding my skill set by learning Python and React.<br><br>
    I have also conducted several workshops on web scraping, large language models (LLMs), survey experiments, and data visualization—helping researchers and practitioners refine their skills in data analysis and technology.<br><br>
    Discover a brief overview of my work history and publications below. If you have any questions or just want to connect, I'd love to hear from you!<br><br>
    <img src="/images/banner.jpg" alt="Banner Image" style="max-width: 100%; height: auto;">
  `,
  email: "michael.jankowski@posteo.de",
  imageUrl:
    "https://michael-jankowski.de/wp-content/uploads/2025/01/20230703_124707-scaled.jpg",
  googleScholarUrl: "https://scholar.google.de/citations?user=qBCi9GkAAAAJ&hl",
  linkedinUsername: "michael-jankowski-44288a294",
  twitterUsername: "michaelj505",
  // altName: "",
  // secretDescription: "I like dogs.",
};