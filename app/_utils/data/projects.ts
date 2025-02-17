import { ProjectType } from "../types/projects";

export const projects: ProjectType[] = [
  {
    id: "tic-tac-toe-angular",
    title: "Tic-Tac-Toe (Angular)",
    description:
      "A website for playing tic-tac-toe, either against the computer or a friend.",
    bullets: [],
    image: "",
    links: {
      github: "https://github.com/mailauki/tic-tac-toe-angular",
      demo: "https://tic-tac-toe-angular-ashen.vercel.app",
    },
    tags: ["Angular", "Angular Material UI"],
    date: new Date("2025-02-16"),
    inspiration: [
      "Design inspired by ",
      {
        text: "Tic Tac Toe",
        link: "https://dribbble.com/shots/3402966-Tic-Tac-Toe",
      },
      " by EYUVA.",
    ],
    wip: true,
  },
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    description:
      "A website to calculate your BMI (Body Mass Index) for adults.",
    bullets: [
      "Uses height and weight to calculate BMI based on formula.",
      "Calculates BMI from US Customary units or Imperial units, as well as Metric units.",
      "Displays the BMI category that the calculated BMI number falls into.",
    ],
    image: "/projects/bmi-calculator.jpg",
    links: {
      github: "https://github.com/mailauki/bmi-calculator",
      demo: "https://neu-bmi-calculator.vercel.app",
    },
    tags: ["Next JS", "TypeScript", "Vercel", "Tailwind CSS"],
    date: new Date("2025-01-04"),
    inspiration: [
      "Design inspired by ",
      {
        text: "BMI Calculator App - Neumorphism",
        link: 
          "https://dribbble.com/shots/11368106-BMI-Calculator-App-Neumorphism",
      },
      " by Kevin Al-Rizal.",
    ],
    wip: true,
  },
  {
    id: "calendar-wallpaper",
    title: "Calendar Wallpaper",
    description: "A website for creating a wallpaper with a calendar.",
    bullets: [
      "Generates a jpeg wallpaper using Open Graph with Next JS.",
      "Customize a wallpaper with a calendar.",
    ],
    image: "",
    links: {
      github: "https://github.com/mailauki/calendar-wallpaper",
      demo: "https://calendar-wallpaper.vercel.app",
    },
    tags: [
      "Next JS",
      "TypeScript",
      "Vercel",
      "Next UI",
      "Tailwind CSS",
      "React Icons",
      "Open Graph",
    ],
    date: new Date("2024-11-26"),
    inspiration: [],
    wip: true,
  },
  {
    id: "budget",
    title: "Paypay Budget",
    description: "Budgeting app using Next UI and Tremor charts.",
    bullets: [
      "Designed to track spending and display progress towards savings goals.",
      "Incorporated budgeting based on categories and comparison with spending.",
      "Included charts and graphs using Tremor blocks.",
    ],
    image: "/projects/paypay-budget.png",
    links: {
      github: "https://github.com/mailauki/budget",
      demo: "https://paypay-budget.vercel.app",
    },
    tags: [
      "Next JS",
      "TypeScript",
      "Vercel",
      "Next UI",
      "Tailwind CSS",
      "Tremor",
      "React Icons",
    ],
    date: new Date("2024-09-17"),
    inspiration: [
      "Design inspired by ",
      {
        text: "Paypay - Money Management Mobile & Saas App",
        link: 
          "https://dribbble.com/shots/24062884-Paypay-Money-Management-Mobile-Saas-App",
      },
      " by Agensip UI UX Agency.",
    ],
    wip: true,
  },
  {
    id: "todoloo",
    title: "ToDoLoo",
    description: "ToDo app using Next JS and MUI.",
    bullets: [
      "Add tasks and mark them as completed.",
      "Filter tasks by dates.",
    ],
    image: "/projects/to-do-loo.png",
    links: {
      github: "https://github.com/mailauki/todoloo",
      demo: "https://to-do-loo.vercel.app",
    },
    tags: ["Next JS", "TypeScript", "Vercel", "Material UI"],
    date: new Date("2024-05-12"),
    inspiration: [
      "Design inspired by ",
      {
        text: "Todo App",
        link: "https://dribbble.com/shots/20502706-Todo-App",
      },
      " by Clément.",
    ],
    wip: true,
  },
  {
    id: "pokedextracker",
    title: "PokedexTracker",
    description: "PokeTracker revamp using Next JS and MUI.",
    bullets: [],
    image: "",
    links: {
      github: "https://github.com/mailauki/pokedextracker",
      demo: "https://pokedextracker.vercel.app",
    },
    tags: ["Next JS", "TypeScript", "Vercel", "Material UI"],
    date: new Date("2024-03-24"),
    inspiration: [
      "Based on ",
      {
        text: "pokedextracker.com",
        link: "https://github.com/pokedextracker/pokedextracker.com",
      },
      " and ",
      {
        text: "previous project",
        link: "#poke-tracker",
      },
      ".",
    ],
    wip: true,
  },
  {
    id: "poke-tracker-v2",
    title: "PokeTracker (v2)",
    description: "PokeTracker revamp using Next JS and PokeApi.",
    bullets: [
      "Displays pokemon from an API.",
      "Mark pokemon as caught to track pokedex progress.",
    ],
    image: "/projects/poketracker-v2.jpg",
    links: {
      github: "https://github.com/mailauki/poketracker",
      demo: "https://poketracker-one.vercel.app",
    },
    tags: ["Next JS", "TypeScript", "Vercel", "Tailwind CSS"],
    date: new Date("2024-01-28"),
    inspiration: [
      "Based on ",
      {
        text: "pokedextracker.com",
        link: "https://github.com/pokedextracker/pokedextracker.com",
      },
      " and ",
      {
        text: "previous project",
        link: "#poke-tracker",
      },
      ".",
    ],
    wip: true,
  },
  {
    id: "studio-ghibli-v2",
    title: "Studio Ghibli (v2)",
    description: "Studio Ghibi Watchlist revamp using Next JS.",
    bullets: [],
    image: "/projects/studio-ghibli-v2.jpg",
    links: {
      github: "https://github.com/mailauki/studio-ghibli-v2",
      demo: "https://studio-ghibli-v2.vercel.app",
    },
    tags: ["Next JS", "TypeScript", "Vercel", "Material UI"],
    date: new Date("2023-11-22"),
    inspiration: [
      "Based on ",
      {
        text: "previous project",
        link: "#studio-ghibli",
      },
      " using Vanilla JavaScript.",
    ],
    wip: true,
  },
  {
    id: "tic-tac-toe-v2",
    title: "Tic-Tac-Toe (v2)",
    description:
      "A website for playing tic-tac-toe, either against the computer or a friend.",
    bullets: [
      "Tic-Tac-Toe revamp using Next JS and Material UI.",
      "Added token emoji and color selection since previous version.",
    ],
    image: "/projects/tic-tac-toe-v2.jpg",
    links: {
      github: "https://github.com/mailauki/tic-tac-toe-v2",
      demo: "https://tic-tac-toe-v2-vert.vercel.app",
    },
    tags: ["Next JS", "Vercel", "Material UI"],
    date: new Date("2023-10-29"),
    inspiration: [
      "Based on ",
      {
        text: "previous project",
        link: "#tic-tac-toe",
      },
      " using React.",
    ],
    wip: false,
  },
  {
    id: "pokedextracker.com",
    title: "pokedextracker.com",
    description: "A website to track your completion of a Living Pokedex.",
    image: "/projects/pokedextracker.com.jpg",
    links: {
      github: "https://github.com/mailauki/pokedextracker.com",
    },
    tags: ["TypeScript", "SCSS", "Material UI"],
    date: new Date("2023-09-24"),
    inspiration: [
      "Clone of ",
      {
        text: "pokedextracker.com",
        link: "https://github.com/pokedextracker/pokedextracker.com",
      },
      " using Material UI.",
    ],
    wip: false,
  },
  {
    id: "nearby-markets",
    title: "Nearby Markets",
    description:
      "An e-commerce app which connects buyers with sellers locally.",
    bullets: [
      "Worked as part of a team of 5 engineers to build an ecommerce web application, using React.",
      "Used a combination of Figma and GitHub to plan, organize, and coordinate the process with my team.",
    ],
    image: "/projects/nearby-markets.jpg",
    links: {
      github: "https://github.com/chingu-voyages/v42-geckos-team-20",
      demo: "https://v42-geckos-20.vercel.app",
    },
    tags: ["React", "Supabase", "Vercel", "Material UI", "Figma"],
    date: new Date("2023-02-12"),
    wip: false,
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    description:
      "A website for playing tic-tac-toe, either against the computer or a friend.",
    bullets: [
      "Created Front-End only game based off of previous project using Ruby.",
      "Used Javascript functions and React hooks to provide game functionality and a “computer” opponent.",
      "Provided color options of the tokens to the user that are unlockable based on the number of wins tally.",
    ],
    image: "/projects/tic-tac-toe.jpg",
    links: {
      github: "https://github.com/mailauki/tic-tac-toe",
      demo: "https://mailauki-tic-tac-toe.netlify.app",
    },
    tags: ["React", "Netlify", "Chakra UI"],
    date: new Date("2022-11-21"),
    inspiration: [
      "Based on ",
      {
        text: "previous project",
        link: "#oo-tic-tac-toe",
      },
      " using Ruby.",
    ],
    wip: false,
  },
  {
    id: "poke-tracker",
    title: "PokeTracker",
    description:
      "A website for viewing viewing pokemon, pokedexes, and tracking your collection.",
    bullets: [
      "Made a web application to show pokemon and allow the user to track their collection.",
      "Applied an external API to display data of pokemon and filters to sort them.",
      "Provided a database to store the information that allows the user to track specific pokemon.",
    ],
    image: "/projects/poke-tracker.jpg",
    links: {
      github: "https://github.com/mailauki/poke-tracker",
      demo: "https://poke-tracker.netlify.app",
    },
    tags: ["React", "TypeScript", "Redux", "Netlify", "Material UI"],
    date: new Date("2022-11-15"),
    wip: false,
  },
  {
    id: "le-banque-du-porcine",
    title: "Le Banque du Porcine",
    description:
      "A website for viewing balances and wish-list items, with progress bars calculated based on both.",
    bullets: [
      "Created minimalistic Next JS Application using Supabase for the database API.",
      "Utilized nested routes to personalize data shown limited to the logged-in user.",
      "Stored data with integrations interconnecting them to each other, such as having an item only exist if there is a user.",
    ],
    image: "/projects/le-banque-du-porcine.jpg",
    links: {
      github: "https://github.com/mailauki/le-banque-du-porcine-version-2",
      demo: "https://le-banque-du-porcine.netlify.app",
    },
    tags: [
      "Next JS",
      "Redux",
      "Netlify",
      "Supabase",
      "Material UI",
      "Swiper JS",
    ],
    date: new Date("2022-10-17"),
    wip: false,
  },
  {
    id: "pic-worthy",
    title: "PicWorthy",
    description: "A website for posting, liking, and commenting on photos.",
    bullets: [
      "Structured using mobile-first design with phone screen-size layout in mind and later upscaling.",
      "Added Redux usage to help maximize database functionality.",
      "Included external components and tools such as Material UI and Swiper JS through React plugins.",
    ],
    image: "/projects/pic-worthy.jpg",
    links: {
      github: "https://github.com/mailauki/pic-worthy",
      demo: "https://pic-worthy.onrender.com",
    },
    tags: [
      "React",
      "Redux",
      "Ruby",
      "Rails",
      "PostgreSQL",
      "Render",
      "Material UI",
      "Swiper JS",
      "dbdiagram.io",
    ],
    date: new Date("2022-11-11"),
    inspiration: [
      "Based from ",
      {
        text: "Instagram",
        link: "https://www.instagram.com",
      },
      ". ",
      "Design inspired by ",
      {
        text: "Insthetic Social Media Mobile App",
        link: "https://dribbble.com/shots/17122481-Insthetic-Social-Media-Mobile-App",
      },
      " by Dhimas Rasyad for Pickolab Studio.",
    ],
    wip: false,
  },
  {
    id: "cat-tube",
    title: "CatTube",
    description: "A website for posting and commenting on cat-related videos.",
    bullets: [
      "Limited content to only pertain to cats through ActiveRecord Validations.",
      "Provided stored user information in the database and interaction to content through Auth.",
      "Utilized a Self-Join database table to allow for user-to-user interaction.",
    ],
    image: "/projects/cat-tube.jpg",
    links: {
      github: "https://github.com/mailauki/phase-4-project-cattube",
    },
    tags: ["React", "Ruby", "Rails", "PostgreSQL", "Heroku", "dbdiagram.io"],
    date: new Date("2022-07-26"),
    inspiration: [
      "Based from ",
      {
        text: "YouTube",
        link: "https://www.youtube.com",
      },
      ".",
    ],
    wip: false,
  },
  {
    id: "oo-tic-tac-toe",
    title: "OO-Tic-Tac-Toe",
    description: "Object Oriented Programming based CLI Tic-Tac-Toe game.",
    bullets: [],
    image: "/projects/oo-tic-tac-toe.jpg",
    links: {
      github: "https://github.com/mailauki/phase-3-oo-tic-tac-toe",
    },
    tags: ["Ruby"],
    date: new Date("2021-09-01"),
    wip: false,
  },
  {
    id: "dune",
    title: "Dune",
    description: "Project for reviewing Dune books using Dune API.",
    bullets: [
      "View Dune books and review them, as well as add a reading status.",
      "Filter books based on reading status, book title, authors, or the series the books belong to.",
      "View the reviews made in a list.",
    ],
    image: "/projects/dune.jpg",
    links: {
      github: "https://github.com/mailauki/phase-2-project-dune",
    },
    tags: ["React"],
    date: new Date("2022-02-22"),
    wip: false,
  },
  {
    id: "studio-ghibli",
    title: "Studio Ghibli",
    description: "Project using Studio Ghibli API.",
    bullets: [
      "View a list of all Studio Ghibli movies, and see more details of a movie if selected.",
      "Mark whether they have watched a movie from the list, and filter the list's view to show the movies that have been marked as watched or not.",
      "Use the filter to sort the list based on director, run time, or others.",
    ],
    image: "/projects/studio-ghibli.jpg",
    links: {
      github: "https://github.com/mailauki/phase-1-project-studio-ghibli",
    },
    tags: ["HTML", "Vanilla JS"],
    date: new Date("2021-12-30"),
    wip: false,
  },
];
