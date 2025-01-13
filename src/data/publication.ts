export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
    {
      year: "2025",
      conference: "Politische Vierteljahresschrift",
      title: "Das Schließen der Repräsentationslücke? Die Wählerschaft des Bündnis Sahra Wagenknecht – Eine Analyse basierend auf Paneldaten",
      authors: "",
      imageUrl: "/images/pvs_bsw.png"
  },
  {
      year: "2025",
      conference: "European Journal of Political Research",
      title: "Selecting and Ranking Female Candidates Under PR: Evidence from a Two-Stage Conjoint Experiment",
      authors: "with Jochen Rehmert",
      imageUrl: "/images/ejpr_women.png"
  },
  {
      year: "2025",
      conference: "Public Policy and Administration",
      title: "Prioritizing exceptional social needs. Experimental evidence on the role of discrimination and client deservingness in public employees' and citizens' discretionary behavior",
      authors: "with Brian Dietrich, Kai-Uwe Schnapp and Markus Tepe",
      imageUrl: "/images/exceptional.png"
  },
  {
    year: "2024",
    conference: "Journal of Elections, Public Opinion and Parties",
    title: "Voting Against Parties: Populist Attitudes, Party Supply, and Support for Non-Partisan Actors",
    authors: "with Cristina-Marie Juen and Markus Tepe",
    paperUrl: "",
    imageUrl: "/images/jepop_ill.png"
},
{
    year: "2023",
    conference: "European Political Science Review",
    title: "Electoral System Preferences of Citizens Compared: Evidence from a Conjoint Experiment in Germany, the Netherlands and the United Kingdom",
    authors: "with Eric Linhart and Markus Tepe",
    paperUrl: "",
    imageUrl: "/images/epsr_conjoint.png"

},
{
    year: "2024",
    conference: "West European Politics",
    title: "Do voters want their parties to be office- or policy-seekers in coalition negotiations?",
    authors: "with Martin Gross, Christina-Marie Juen and Florian Erlbruch",
    paperUrl: "",
    imageUrl: "/images/wep_coal.jpeg"
},
{
    year: "2023",
    conference: "Politische Vierteljahresschrift",
    title: "Support for strategic voting campaigns: Evidence from a survey experiment during the German General Election of 2021",
    authors: "",
    imageUrl: "/images/pvs_cue.png"
},
{
    year: "2023",
    conference: "Political Analysis",
    title: "When Correlation Is Not Enough: Validating Populism Scores from Supervised Machine-Learning Models",
    authors: "with Robert A. Huber",
    paperUrl: "",
    imageUrl: "/images/pa_corr.png"
},
{
  year: "2023",
  conference: "European Journal of Political Research",
  title: "Populist Parties and the Two-Dimensional Policy Space",
  authors: "with Robert A. Huber and Christina-Marie Juen",
  paperUrl: "",
  imageUrl: "/images/ejpr_2d.png"
},
{
  year: "2023",
  conference: "Acta Politica",
  title: "Turning a blind eye on the black sheep. When are voters loyal to corrupt politicians?",
  authors: "with Christina-Marie Juen and Marcel Lewandowsky",
  paperUrl: "",
  imageUrl: "/images/acta_corrupt.png"
},
{
  year: "2023",
  conference: "European Political Science Review",
  title: "Sympathy for the devil? Voter support for illiberal politicians",
  authors: "with Marcel Lewandowsky",
  paperUrl: "",
  imageUrl: "/images/epsr_ill.png"
},
{
  year: "2023",
  conference: "European Journal of Politics and Gender",
  title: "Slowly adopting: The impact of same-sex marriage legalization on the attitudes of parliamentary candidates in Germany",
  authors: "",
  paperUrl: "",
  imageUrl: "/images/ejpg_choice.png"
},
{
  year: "2023",
  conference: "Politische Vierteljahresschrift",
  title: "Explaining Populist Attitudes: The Impact of Issue Specific Discontent and Representation",
  authors: "with Robert A. Huber and Carsten Wegscheider",
  paperUrl: "",
},
{
  year: "2022",
  conference: "Politische Vierteljahresschrift",
  title: "Die Positionen der Parteien zur Bundestagswahl 2021: Ergebnisse des Open Expert Surveys",
  authors: "with Anna-Sophie Kurella, Christian Stecker, et al.",
  paperUrl: "",
},
{
  year: "2023",
  conference: "International Review of Administrative Sciences",
  title: "Administrative delegation revisited: Experimental evidence on the behavioural consequences of public service motivation and risk aversion",
  authors: "with Maximilian Lutz, Susumu Shikano and Markus Tepe",
  paperUrl: "",
},
{
  year: "2023",
  conference: "Party Politics",
  title: "How stable are 'left' and 'right'? A morphological analysis using open-ended survey responses of parliamentary candidates",
  authors: "with Sebastian Schneider and Markus Tepe",
  paperUrl: "",
},
{
  year: "2022",
  conference: "Party Politics",
  title: "Local preferences in candidate selection. Evidence from a Conjoint Experiment among party leaders in Germany",
  authors: "with Jan Berz",
  paperUrl: "",
},
{
  year: "2022",
  conference: "Zeitschrift für Vergleichende Politikwissenschaft",
  title: "Parteiendifferenz in der Wald- und Forstpolitik. Eine Analyse der deutschen Bundesländer",
  authors: "with Ulrich Hartung and Jochen Müller",
  paperUrl: "",
},
{
  year: "2023",
  conference: "Politics",
  title: "Who wants COVID-19 Vaccination to be Compulsory? The Impact of Party Cues, Left-Right Ideology and Populism",
  authors: "with Christina-Marie Juen, Robert A. Huber, Markus Tepe, Torren Frank and Leena Maaß",
  paperUrl: "",
},
{
  year: "2022",
  conference: "Policy Sciences",
  title: "Vaccine Alliance Building Blocks: A Conjoint Experiment on Popular Support for International COVID-19 Cooperation Formats",
  authors: "with Pieter Vanhuysse and Markus Tepe",
  paperUrl: "",
},
{
  year: "2022",
  conference: "Acta Politica",
  title: "Ballot Position Effects in Open-List PR Systems: The Moderating Effect of Postal Voting",
  authors: "with Torren Frank",
  paperUrl: "",
},
{
  year: "2022",
  conference: "Party Politics",
  title: "The Impact of Anti-Establishment Parties on the Electoral Success of Independent Local Lists: Evidence from Germany",
  authors: "with Christina-Marie Juen and Markus Tepe",
  paperUrl: "",
},
{
  year: "2022",
  conference: "German Politics",
  title: "Keep it simple! German voters' limited competence to evaluate electoral systems' functions",
  authors: "with Eric Linhart and Markus Tepe",
  paperUrl: "",
},
{
  year: "2021",
  conference: "Politische Vierteljahresschrift",
  title: "Stimmzettel nutzerfreundlicher gestalten: Empfehlungen auf Grundlage eines Survey-Experiments",
  authors: "with Dominic Nyhuis, Felix Münchow, Morten Harmening, Jannik Bruns, Max Holly, Josip Karacic and Christoph Hönnige",
  paperUrl: "",
},
{
  year: "2021",
  conference: "Electoral Studies",
  title: "The Incumbency Advantage in Second-Order PR Elections: Evidence from the Irish Context, 1942-2019",
  authors: "with Stefan Müller",
  paperUrl: "",
},
{
  year: "2021",
  conference: "Zeitschrift für Parlamentsfragen",
  title: "Abstiegserfahrungen in der Kommune und der Aufstieg Unabhängiger Wählergemeinschaften. Neue Befunde aus einem Mehrebenen-Kommunalwahlpanel",
  authors: "with Christina-Marie Juen and Markus Tepe",
  paperUrl: "",
},
{
  year: "2021",
  conference: "Politics and Gender",
  title: "Model Dependency in the Analysis of Women's Electoral Success",
  authors: "with Kamil Marcinkiewicz",
  paperUrl: "",
},
{
  year: "2020",
  conference: "Journal of Public Administration Research and Theory",
  title: "Representative Bureaucracy and Public Hiring Preferences: Evidence from a Conjoint Experiment among German Municipal Civil Servants and Private Sector Employees",
  authors: "with Christine Prokop and Markus Tepe",
  paperUrl: "",
},
{
  year: "2020",
  conference: "West European Politics",
  title: "Conflict Dimensions and Party Positions in Multi-Level Democracies: Evidence from the Local Manifesto Project",
  authors: "with Martin Gross",
  paperUrl: "",
},
{
  year: "2019",
  conference: "dms – der moderne staat",
  title: "NieKom. Eine neue Datenbasis für die kommunale Wahl- und Policyforschung in Niedersachsen",
  authors: "with Christina-Marie Juen, Florian Erlbruch, and Markus Tepe",
  paperUrl: "",
},
{
  year: "2019",
  conference: "Politische Vierteljahresschrift",
  title: "Welches Wahlsystem wollen die Wähler? Evidenz von einem Conjoint-Experiment",
  authors: "with Eric Linhart and Markus Tepe",
  paperUrl: "",
},
{
  year: "2019",
  conference: "Politics and Gender",
  title: "The Effect of Electing Women on Future Female Candidate Nomination Patterns: Findings from a Regression Discontinuity Design",
  authors: "with Kamil Marcinkiewicz and Anna Gwiazda",
  paperUrl: "",
},
{
  year: "2019",
  conference: "West European Politics",
  title: "To Adapt or to Defend? Comparing Position Shifts among Bundestag Candidates between 2013 and 2017",
  authors: "with Sebastian Schneider and Markus Tepe",
  paperUrl: "",
},
{
  year: "2019",
  conference: "Journal of Elections, Public Opinion and Parties",
  title: "Do voters really prefer more choice? Determinants of Support for Personalised Electoral Systems",
  authors: "with Stefan Müller",
  paperUrl: "",
},
{
  year: "2019",
  conference: "Politics and Gender",
  title: "Ineffective and Counterproductive? Evaluating the Impact of Gender Quotas in Open-List PR Systems",
  authors: "with Kamil Marcinkiewicz",
  paperUrl: "",
},
{
  year: "2018",
  conference: "Zeitschrift für Vergleichende Politikwissenschaft",
  title: "Politikpositionen von Regierungen im Ländervergleich. Heterogenität am Beispiel der Agrarpolitik",
  authors: "with Stefan Ewert and Jochen Müller",
  paperUrl: "",
},
{
  year: "2018",
  conference: "Zeitschrift für Vergleichende Politikwissenschaft",
  title: "Die AfD im achten Europäischen Parlament: Eine Analyse der Positionsverschiebung basierend auf namentlichen Abstimmungen von 2014-2016",
  authors: "with Marcel Lewandowsky",
  paperUrl: "",
},
{
  year: "2018",
  conference: "The British Journal of Politics and International Relations",
  title: "One Voice or Different Choice? Vote Defection of EU Member States in the United Nations General Assembly",
  authors: "with Nicolas Burmester",
  paperUrl: "",
},
{
  year: "2018",
  conference: "Party Politics",
  title: "Are populist parties fostering women's political representation in Poland? A comment on Kostadinova & Mikulska",
  authors: "with Kamil Marcinkiewicz",
  paperUrl: "",
},
{
  year: "2017",
  conference: "Party Politics",
  title: "Ideological Alternative? Analyzing AfD Candidates' Ideal Points via Blackbox Scaling",
  authors: "with Sebastian Schneider and Markus Tepe",
  paperUrl: "",
},
{
  year: "2016",
  conference: "East European Politics and Societies",
  title: "The Effects of Electoral Rules on Parliamentary Behavior: A Comparative Analysis of Poland and the Czech Republic",
  authors: "with Kamil Marcinkiewicz and Mary Stegmaier",
  paperUrl: "",
},
{
  year: "2016",
  conference: "Electoral Studies",
  title: "Voting for Locals: Voters' Information Processing Strategies in Open-List PR Systems",
  authors: "",
  paperUrl: "",
},
{
  year: "2014",
  conference: "Zeitschrift für Politikwissenschaft",
  title: "'All by myself' oder 'With a little help from my friends'? Die Integration der Bundespartei in die Wahlkampforganisation auf Landesebene",
  authors: "with Marcel Lewandowsky",
  paperUrl: "",
},
{
  year: "2014",
  conference: "Journal of European Public Policy",
  title: "Reassessing the European Union in the United Nations General Assembly",
  authors: "with Nicolas Burmester",
  paperUrl: "",
},
{
  year: "2014",
  conference: "German Politics",
  title: "When there's no Easy Way out: Electoral Law Reform and Ballot Position Effects in the 2011 Hamburg State Elections",
  authors: "with Kamil Marcinkiewicz",
  paperUrl: "",
},
{
  year: "2013",
  conference: "The British Journal of Politics & International Relations",
  title: "The Unsolved Puzzle: Pacific Asia's Voting Cohesion in the United Nations General Assembly – A Response to Peter Ferdinand",
  authors: "with Nicolas Burmester",
  paperUrl: "",
},
{
  year: "2013",
  conference: "Zeitschrift für Parlamentsfragen",
  title: "The agony of choice? On voter turnout and the new electoral law in the city-state of Hamburg",
  authors: "with Cord Jakobeit, Philipp Hiller und Nils Thomsen",
  paperUrl: "",
},
];
