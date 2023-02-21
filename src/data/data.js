import CrudFull from '../assets/projects/crud-fullstack.png';
import CrudFull2 from '../assets/projects/crud-fullstack2.png';
import CafeChat from '../assets/projects/chatapp.png';
import CafeChat2 from '../assets/projects/chatapp2.png';
import Pokedex from '../assets/projects/pokedex.png';
import Pomodoro from '../assets/projects/pomodoro.png';
import FoodPeek from '../assets/projects/foodpeek.png'

const HTML = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
const CSS = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
import GitHub from '../assets/github.png';



const JavaScript = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const ReactImg = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
//const GitHub = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" ;
const Node = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
const Postgresql = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";
const Tailwind = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
const MYSQL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";

export const data=[
    {
        id:1,
        name:"CRUD Fullstack",
        image:CrudFull,
        altImage:CrudFull2,
        github:"https://github.com/carloscurcino/CRUD-REACT-FULLSTACK",
        live:"https://crudreactfullstack.netlify.app",
        description: "crudDesc",
        stack: [
            ReactImg,
            Node,
            MYSQL,
            GitHub,
        ],
    },
    {
        id:2,
        name:"Café Chat WebApp",
        image:CafeChat,
        altImage: CafeChat2,
        github:"https://github.com/carloscurcino/CafeChat-REACT",
        live:"https://cafechat.netlify.app",
        description: "cafeChat",
        stack: [
            ReactImg,
            GitHub,
        ],
    },
    {
        id:3,
        name:"Pokedex",
        image:Pokedex,
        altImage:Pokedex,
        github:"https://github.com/carloscurcino/Pokedex",
        live:"https://carloscurcino.github.io/Pokedex/",
        description: "pokedexDesc",
        stack: [
            HTML,
            CSS,
            JavaScript,
            GitHub
        ],
    },
    {
        id:4,
        name:"Pomodoro Timer",
        image:Pomodoro,
        altImage:Pomodoro,
        github:"https://github.com/carloscurcino/Pomodoro-Timer",
        live:"https://pomodorotimers.com.br",
        description: "pomodoroDesc",
        stack: [
            HTML,
            CSS,
            JavaScript,
            GitHub,
        ],
    },
    {
        id:5,
        name:"FooD PeeK",
        image:FoodPeek,
        altImage:FoodPeek,
        github:"https://github.com/carloscurcino/FastFood-LandingPage",
        live:"https://carloscurcino.github.io/FastFood-LandingPage/",
        description: "foodDesc",
        stack: [
            HTML,
            CSS,
            JavaScript,
            GitHub,
        ],
    },

]