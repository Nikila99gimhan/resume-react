import {AssignmentOutlined, Facebook, Language, WebOutlined} from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


export default {
  name: "Nikila Fernando",
  title: "Undergraduate",
  birthday: "23rd July 1999",
  email: "nikilafern99@gmail.com",
  address: "307/2D Akkarapanaha, Negombo",
  phone: "077 3626373",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/nikila.gimhan/",
      text: "My Facebook",
      icon: <Facebook />,
    },
    Twitter: {
      link: "https://twitter.com/NikilaFernando",
      text: "My Twitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/nikila-fernando-47ba811b0/",
      text: "My LinkedIN",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link:
        "https://github.com/Nikila99gimhan?tab=overview&from=2021-03-01&to=2021-03-08",
      text: "My Github",
      icon: <GitHubIcon />,
    },
  },

  about:
    "Hi! My name is Nikila Fernando , I am a second-year Computer Science student at NSBM Green University SriLanka.Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.\n\n" +
    "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

  Experiences: [
    {
      title: "Registered IEE Member",
      date: "2020 - Present",
      description:
        "The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering.  The Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers",
    },
    {
      title: "Work 02",
      date: "2020 - Present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work 03",
      date: "2020 - Present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],
  Education: [
    {
      title: "Bachelor Of Computer Science",
      date: "2020 - Present",
      description:
        "The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering. Connecting members worldwide, the Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers",
    },
    {
      title: "Maris Stella College , Negombo ",
      date: "2005 - 2018",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Education  03",
      date: "2020 - Present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],
  services: [
    {
      title: "web development",
      description: "Expenses as material breeding insisted building to",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Branding Identity",
      description: "Expenses as material breeding insisted building to",
      icon: <WebOutlined />,
    },
    {
      title: "web dev",
      description: "Expenses as material breeding insisted building to",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "Front End",
      description: [
        "ReactJs",
        "JavaScript",
        "Bootstrap",
        "Material UI",
        "HTML/CSS",
      ],
    },
    {
      title: "Back END",
      description: ["Java", "Node JS", "PHP"],
    },
    {
      title: "DataBases",
      description: ["My SQL"],
    },
    {
      title: "Version Control",
      description: ["Git", "Git Hub"],
    },
  ],


  projects: [
    {
      tag: 'React',
      image: import('../assets/images/smash-3.jpg'),
      title:'Personal Portfolio',
      description:'This is dummy project description. Please fill it in ',
      links:[
        {link:'https://www.google.com', icon: <Language />},
        {link: 'https://github.com/Nikila99gimhan', icon: <GitHubIcon />}

      ],
    },
    {
      tag: 'JAVA',
      image: import('../assets/images/smash-3.jpg'),
      title:'Java web',
      description:'This is dummy project description. Please fill it in ',
      links:[
        {link:'https://www.google.com', icon: <Language />},
        {link: 'https://github.com/Nikila99gimhan', icon: <GitHubIcon />}

      ],
    },
    {
      tag: 'HTML / CSS',
      image: import('../assets/images/smash-3.jpg'),
      title:'Simple chat APP',
      description:'This is dummy project description. Please fill it in ',
      links:[
        {link:'https://www.google.com', icon: <Language />},
        {link: 'https://github.com/Nikila99gimhan', icon: <GitHubIcon />}

      ],
    },
    {
      tag: 'React',
      image: import('../assets/images/smash-3.jpg'),
      title:'Simple chat APP',
      description:'This is dummy project description. Please fill it in ',
      links:[
        {link:'https://www.google.com', icon: <Language />},
        {link: 'https://github.com/Nikila99gimhan', icon: <GitHubIcon />}

      ],
    },

  ],
};
