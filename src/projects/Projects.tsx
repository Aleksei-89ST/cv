import style from "./Projects.module.css";
import styleContainer from "../common/Container.module.css";
import Project from "./project/Project";
import car from "../images/vipcar.png";
import fitness from "../images/fitnes.jpg";
import mern from "../images/Mern.png";
import blog from "../images/blog.png";
import code from "../images/editor.jpg";
import burger from "../images/burger.jpg";
import network from "../images/network.png";
import pizza from "../images/pizza.png";
import cart from "../images/cart.png";
import news from "../images/native.png";
import Header from "../header/Header";

const Projects = () => {
  const projects = [
    {
      title: "Project-Fitness",
      link: "https://github.com/Aleksei-89ST/project-fitness-app-react-mui",
      image: fitness,
    },
    {
      title: " Rent-VIP-Car",
      link: "https://project-rent-car-app.vercel.app/",
      image: car,
    },
    {
      title: " Shopping-Cart",
      link: "https://shopping-cart-brown-two.vercel.app/store",
      image: cart,
    },
    {
      title: " News-React-Native",
      link: "https://github.com/Aleksei-89ST/project-rent-car-app",
      image: news,
    },
    {
      title: "Blog-MERN-Back",
      link: "https://github.com/Aleksei-89ST/Starovoitov-blog-MERN",
      image: mern,
    },
    {
      title: "Blog-MERN-Front",
      link: "https://github.com/Aleksei-89ST/Starovoitov-blog-MERN-front",
      image: blog,
    },
    {
      title: "Code-Editor",
      link: "https://code-editor-webcam-react.vercel.app/",
      image: code,
    },
    {
      title: "Restaurant-Burger",
      link: "react-app-burger-gules.vercel.app/",
      image: burger,
    },
    {
      title: "Social-Network",
      link: "social-network-delta.vercel.app/",
      image: network,
    },
    {
      title: "React-Pizza",
      link: "https://react-pizza-ten.vercel.app/",
      image: pizza,
    },
  ];
  return (
    <div id={"Projects"}>
      <Header color={"#27B016"} text={" / projects"} displayIcons={"none"} />
      <div className={`${style.projects} ${styleContainer.page}`}>
        <div
          className={`${styleContainer.container} ${styleContainer.listContainer}`}
        >
          <h2>My projects</h2>
          <div className={styleContainer.list}>
            {projects.map((el, index) => (
              <Project
                title={el.title}
                link={el.link}
                image={el.image}
                key={el.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
