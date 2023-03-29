//Images
import ReactLogo from "../images/react.svg";
import ReduxLogo from "../images/redux.svg";
import NestLogo from "../images/nestjs.svg";
import GatsbyLogo from "../images/gatsbyjs.svg";
import GithubLogo from "../images/github.svg";
import SymfonyLogo from "../images/symfony.svg";
import GitlabLogo from "../images/gitlab.svg";
import FlutterLogo from "../images/flutter.svg";
import PythonLogo from "../images/python.svg";
import SqlLogo from "../images/mysql.svg";
import TypeOrmLogo from "../images/typeorm.svg";
import DoctrineLogo from "../images/doctrine.svg";
import JiraLogo from "../images/jira.svg";
import NotionLogo from "../images/notion.svg";
import DefaultImage from "../images/defaultImage.png";
import A2logo from "../images/a2logo.png";

const initialState = {
  sound: true,
  music: 0,
  popup: true,
  skills: [
    {
      title: "React",
      description: "I started learning React in 2021 in my organization. Now I am using it for my personal projects and for my school projects.",
      image: ReactLogo
    },
    {
      title: "React Native",
      description: "I'm currently learning React Native because i'm doing a mobile application with my school to complete a group project.",
      image: ReactLogo
    },
    {
      title: "Redux",
      description: "My organization is using Redux for the state management with React. So I started learning Redux in 2021 at the same time as React.",
      image: ReduxLogo
    },
    {
      title: "GatsbyJS",
      description: "Before in my organization, we were using React boilerplate. But now we are using GatsbyJS with our new projects.",
      image: GatsbyLogo
    },
    {
      title: "NestJS",
      description: "For my personal projects and now for the new API REST we are doing in my organization, I am using NestJS.",
      image: NestLogo
    },
    {
      title: "TypeORM",
      description: "As I am using NestJS, I am using TypeORM for the database management.",
      image: TypeOrmLogo
    },
    {
      title: "SQL",
      description: "I learned SQL in school and in my organization. I don't use it too much because of the ORM but I know the basics.",
      image: SqlLogo
    },
    {
      title: "Symfony",
      description: "The first project I did in my organization was in Symfony. i'm still currently using it.",
      image: SymfonyLogo
    },
    {
      title: "Doctrine",
      description: "As I am using Symfony, I am using DQL for the database management.",
      image: DoctrineLogo
    },
    {
      title: "Flutter",
      description: "I used Flutter for a school project, i know the basics.",
      image: FlutterLogo
    },
    {
      title: "Python",
      description: "I also use Python for a school project, i know the basics of it.",
      image: PythonLogo
    },
    {
      title: "Github",
      description: "For my personal projects, my school projects and my organization projects, I am using Github.",
      image: GithubLogo
    },
    {
      title: "Gitlab",
      description: "My organization recently move from Gitlab to Github. I use it one year.",
      image: GitlabLogo
    },
    {
      title: "Jira",
      description: "We are using Scrum methodology in my organization. So we are using Jira for the project management. ",
      image: JiraLogo
    },
    {
      title: "Notion",
      description: "I'm using notion in my school project to manage the tasks and share link.",
      image: NotionLogo
    },
  ],
    experiences: [
    {
      title: "A2Display",
      description: "I join A2Display in 2021 as my first experience in web development. I work as a full stack developper using React and Symfony. Since mid 2022 we add a new API REST in NestJS. We work with a Scrum methodology using Jira and to maintain the code we use Git with GitHub.",
      image: A2logo
    },
    {
      title: "Default",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget aliquam nunc nisl eu lectus.",
      image: DefaultImage
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'TOGGLE_SOUND':
      return {
        ...state,
        sound: !state.sound
      };
    case 'SET_MUSIC':
      return {
        ...state,
        music: action.payload
      };
    case "SET_POPUP":
      return {
        ...state,
        popup: action.payload
      };
    default:
      return state;
  }
}

export default reducer;