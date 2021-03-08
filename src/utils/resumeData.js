import { Facebook } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default {
  name: "Nikila is Coding",
  title: "Undergraduate",
  birthday: "23rd July 1999",
  email: "nikila99fernando.gimhan@gmail.com",
  address: "307/2D Akkarapanaha, Negombo",

  socials: {
    facebook: {
      link: "https://www.facebook.com/nikila.gimhan/",
      text: "NikilaIsCoding",
      icon: <Facebook />,
    },
    twitter: {
      link: "https://twitter.com/NikilaFernando",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/nikila-fernando-47ba811b0/",
      text: "MyLinkedIN",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link:
        "https://github.com/Nikila99gimhan?tab=overview&from=2021-03-01&to=2021-03-08",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
};
