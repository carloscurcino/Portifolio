import CrudFull from '../assets/projects/crud-fullstack.png';
import CrudFull2 from '../assets/projects/crud-fullstack2.png';
import CafeChat from '../assets/projects/chatapp.png';
import CafeChat2 from '../assets/projects/chatapp2.png';
import Pokedex from '../assets/projects/pokedex.png';
import Pomodoro from '../assets/projects/pomodoro.png';
import FoodPeek from '../assets/projects/foodpeek.png'
import GrupoBenser from '../assets/projects/grupobenser.png'
import GrupoBenser2 from '../assets/projects/grupobenser2.png'
import Doulas2 from '../assets/projects/doulas2.png'
import Rancho from '../assets/projects/rancho.png'
import Rancho2 from '../assets/projects/rancho2.png'

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
import Next from '../assets/nextjs.png'
import Django from '../assets/django.png'
const Adonis = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg"
const Docker = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"


export const data = [

    {
        id: 1,
        name: "Pokedex",
        image: Pokedex,
        altImage: Pokedex,
        github: "https://github.com/carloscurcino/Pokedex",
        live: "https://carloscurcino.github.io/Pokedex/",
        description: "pokedexDesc",
        stack: [
            HTML,
            CSS,
            JavaScript,
            GitHub
        ],
    },
    {
        id: 2,
        name: "Pomodoro Timer",
        image: Pomodoro,
        altImage: Pomodoro,
        github: "https://github.com/carloscurcino/Pomodoro-Timer",
        live: "https://carloscurcino.github.io/Pomodoro-Timer/",
        description: "pomodoroDesc",
        stack: [
            HTML,
            CSS,
            JavaScript,
            GitHub,
        ],
    },
    {
        id: 3,
        name: "Café Chat WebApp",
        image: CafeChat,
        altImage: CafeChat2,
        github: "https://github.com/carloscurcino/CafeChat-REACT",
        live: "https://cafechat.netlify.app",
        description: "cafeChat",
        stack: [
            ReactImg,
            GitHub,
        ],
    },
    {
        id: 4,
        name: "CRUD Fullstack",
        image: CrudFull,
        altImage: CrudFull2,
        github: "https://github.com/carloscurcino/CRUD-REACT-FULLSTACK",
        live: "https://crudreactfullstack.netlify.app",
        description: "crudDesc",
        stack: [
            ReactImg,
            Node,
            MYSQL,
            GitHub,
        ],
    },
    {
        id: 5,
        name: "FooD PeeK",
        image: FoodPeek,
        altImage: FoodPeek,
        github: "https://github.com/carloscurcino/FastFood-LandingPage",
        live: "https://carloscurcino.github.io/FastFood-LandingPage/",
        description: "foodDesc",
        stack: [
            HTML,
            CSS,
            JavaScript,
            GitHub,
        ],
    },
    {
        id: 6,
        name: "Rancho",
        image: Rancho,
        altImage: Rancho2,
        github: "",
        live: "https://ranchodivinoespiritosanto.vercel.app/",
        description: "ranchoDesc",
        stack: [
            Next,
            Tailwind,
            GitHub
        ]
    },
    {
        id: 7,
        name: "Grupo Benser",
        image: GrupoBenser,
        altImage: GrupoBenser2,
        github: "",
        live: "https://grupobenser.com",
        description: "benserDesc",
        stack: [
            Adonis,
            Docker,
            GitHub
        ]
    },
    {
        id: 8,
        name: "Associação de Doulas de Goiás",
        image: Doulas2,
        altImage: Doulas2,
        github: "",
        live: "https://doulasui.codetower.com.br",
        description: "doulasDesc",
        stack: [
            Next,
            Tailwind,
            Docker,
            GitHub
        ]
    }
]