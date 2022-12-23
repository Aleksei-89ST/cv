import style from "./Projects.module.css";
import styleContainer from "../common/Container.module.css";
import Project from "./project/Project";
import car from "../images/vipcar.png";
import fitness from "../images/fitnes.jpg";
import mern from "../images/Mern.png";
import blog from "../images/blog.png";
import code from "../images/editor.jpg";
import network from "../images/network.png";
import cart from "../images/cart.png";
import notes from "../images/notes.jpg";
import collection from "../images/colection.png"
import halmahera from "../images/halmahera.jpg"
import iphone from "../images/iphone.jpg"
import Header from "../header/Header";
import native from "../images/native.jpg"

const Projects = () => {
  const projects = [
    {
      title: "Fitness",
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
      link: "https://shopping-cart-sandy.vercel.app/",
      image: cart,
    },
    {
      title: "React-Native",
      link: "https://github.com/Aleksei-89ST/news-blog-react-native",
      image: native,
    },
    {
      title: " Notes",
      link: "https://notes-ts-nu.vercel.app/",
      image: notes,
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
      title: "Social-Network",
      link: "https://github.com/Aleksei-89ST/social-network-react",
      image: network,
    },
    {
      title: "Photo-Collection",
      link: "https://photo-collection-react.vercel.app/",
      image: collection,
    },
    {
      title: "Islands-Halmahera",
      link: "https://islands-halmahera.vercel.app/",
      image: halmahera,
    },
    {
      title: "Iphone-14-pro",
      link: "https://iphone-14-pro-frilance.vercel.app/",
      image: iphone,
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
