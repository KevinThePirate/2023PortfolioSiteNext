export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  {
    label: "Motley Magazine",
    timeline: "Sep '22 - Apr '23 ",
    desc: "Graphic and Print Designer for six-print monthly print issues",
  },
  {
    label: "Cork City Libraries",
    timeline: "Dec ’19 - Mar ‘23",
    desc: "Contracted to run another round of classes in my 'Fundamentals of Web Design' course by the Grand Parade, Hollyhill, Mayfield, Tory Top and Blackpool libraries",
  },
  {
    label: "Nimbus Research Centre",
    timeline: "Jun ‘22 – Aug ‘22",
    desc: "User Experience Design intern working on products in a variety of industries",
  },
  {
    label: "Freelance Web Design",
    timeline: "May ’17 - Present",
    desc: "Web design and implementation for various businesses such as TK Fitness, Sothic Biosciences, etc.",
  },
  {
    label: "Ashton Secondary School",
    timeline: "Aug ’19 – Oct ‘21 ",
    desc: "Designed, wrote, and delivered a ten-week class entitled “Intro to Comic Production” for the Ashton Adult Education Program ",
  },
  {
    label: "MyFutprint Entertainment, LLC",
    timeline: "Jun ‘22 – Aug ‘22",
    desc: "Started as a European Marketing intern and worked my way onto the editing team, helping to manage teams of creatives producing comic books for an international audience of hundreds of thousands. Initially brought on to work as a talent acquisition assistant and as an editor for internationally published graphic novels and magazines, then to manage that editing team before finally transitioning into my role as the European Marketing Intern where I researched and focused on expanding the company’s outreach and brand awareness in Europe along with working with the global marketing team. As part of this initiative, I lead events and brokered partnership, namely a company appearance at Ireland’s largest Japanese culture convention. Having worked well with the global team during my internship, I was brought onto the staff team to continue my work to bring our company to Europe. After showing my dedication and my ability to organise the production of such a project, I was appointed to spearhead our newest digital magazine Fan Art Friday released and read on our app by the thousands of people who have downloaded it. Lastly, I transitioned my role from before as an Editor & Producer into a part-time role to ensure I could uphold the quality of my work while on placement for college.",
  },
  {
    label: "DePuy Synthes – Johnson & Johnson",
    timeline: "Jan ‘21 - Aug ‘21",
    desc: "Role: Communications Co-Op. Acted as the sole in-house designer and video producer for the global DePuy Synthes company, under Johnson & Johnson global. This involved Web Design, Graphic Design, Video Editing & Motion Graphic Design for a global audience and writing a comprehensive, 60+ page 'Communications Playbook' teaching future team members how to interact with all of our various technical systems.  Key roles included being the creative director for the DPS STEM Academy's 'Mission To Mars' Summer Camp. This role involved designing all the assets for the camp, writing, designing, and editing a 4-episode mini-series to go along with the lessons, many of which I helped to plan and facilitate with the children myself.",
  },
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
