export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2014—2017",
    institution: "University of Oldenburg",
    degree: "Ph.D. in Political Science",
    thesis: "Candidate characteristics, party positions and voter heuristics: analyzing the supply- and demand-side of politics",
    thesisUrl: "http://oops.uni-oldenburg.de/2970/1/jancan17.pdf"
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2011—2014",
    institution: "University of Hamburg",
    degree: "M.A. in Political Science",
    thesis: "Voting Patterns of Regional Organizations in the United Nations General Assembly",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2008—2011",
    institution: "University of Hamburg",
    degree: "B.A. in Political Science",
    thesis: "Non-Voters in the Hamburg State-Elections of 2011",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
