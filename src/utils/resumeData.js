import { Facebook } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default {
  name: "Nikila Fernando",
  title: "Undergraduate",
  birthday: "23rd July 1999",
  email: "nikilafern99@gmail.com",
  address: "307/2D Akkarapanaha, Negombo",

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
};
