import MainImg from "../src/assets/Untitled design (1)_processed.png";
import LinkedInIcon from "../src/assets/linkedin.png";
import FbIcon from "../src/assets/facebook.png";
import GithubIcon from "../src/assets/github (1).png";
import ContentfulIcon from "../src/assets/62c714f2b44be1961554a6d4.png";
import GatsbyIcon from "../src/assets/icons8-gatsbyjs-480.png";
import FigmaIcon from "../src/assets/figma.png";
import Project1MainImg from "../src/assets/shoe-master-main.png";
import Project3MainImg from "../src/assets/kepper-s-realty-website.png";
import Project3SupportImg from "../src/assets/property list page.png";
import Project2MainImg from "../src/assets/recipe-and-blog-main.png";
import Project1SupportImg from "../src/assets/Screenshot 2024-08-07 at 10.45.30 AM.png";
import Project2SupportImg from "../src/assets/Screenshot 2024-08-07 at 3.33.32 PM.png";
import Chevron from "../src/assets/chevron.png";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>My Portfolio</h1>
      </nav>
      <section className="hero-banner">
        <img src={MainImg} className="hero-banner-img" />
        <h1>
          Hi, my name is <span>Keifer Ramos</span>
        </h1>
        <h2>I am a frontend developer.</h2>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/keifer-ramos-409962244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FbIcon} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/keifer-ramos-409962244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/keifer-ramos-409962244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="" />
          </a>
        </div>
        <div className="projects-link">
          <h3>My Projects</h3>
          <img src={Chevron} alt="" />
        </div>
      </section>
      <section className="project">
        <div className="project-container">
          <img className="main-img" src={Project3MainImg} alt="" />
          <picture>
            <img
              className="support-img"
              src={Project3SupportImg}
              alt="Responsive image"
            />
          </picture>
          <div className="project-info">
            <div className="title">
              <h3>Real Estate - Web Design</h3>
              <a
                href="https://www.figma.com/design/bky3T5pTAEV0D5AaWpV8KL/kepper's-realty?node-id=0-1&t=HKjLuST6lhpiMCy9-1"
                target="_blank"
              >
                <img src={FigmaIcon} alt="" />
                <p>Design File</p>
              </a>
            </div>

            <div className="project-description">
              <p>
                I'm Currently working on this project right now. It will be a
                fully static website. Build with GatsbyJs. Coming soon.
              </p>
              <p>
                Check it{" "}
                <a href="https://www.figma.com/design/bky3T5pTAEV0D5AaWpV8KL/kepper's-realty?node-id=0-1&t=HKjLuST6lhpiMCy9-1"></a>
              </p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img className="main-img" src={Project1MainImg} alt="" />
          <picture>
            <source
              media="(min-width: 800px) and (max-width: 1099px)"
              srcset={require("../src/assets/shoe-master-mobile.png")}
            />
            <img
              className="support-img"
              src={Project1SupportImg}
              alt="Responsive image"
            />
          </picture>
          <div className="project-info">
            <div className="title">
              <h3>Shoe Master - Ecommerce Website</h3>
              <a
                href="https://github.com/KeiferRamos/shoe-ecommerce"
                target="_blank"
              >
                <img src={GithubIcon} alt="" />
                <p>source code</p>
              </a>
            </div>
            <div className="project-tools">
              <div>
                <img src={GatsbyIcon} alt="" />
                <p>GatsbyJs</p>
              </div>
              <span>•</span>
              <div>
                <img className="contentful-icon" src={ContentfulIcon} alt="" />
                <p>Contentful</p>
              </div>
            </div>
            <div className="project-description">
              <p>
                Shoe Master is a personal project showcasing Nike shoes for men,
                women, and kids with a sleek design and easy navigation.
              </p>
              <p>
                Visit the website{" "}
                <span>
                  <a href="https://shoe-master.netlify.app/">here</a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img className="main-img" src={Project2MainImg} alt="" />
          <picture>
            <source
              media="(min-width: 800px) and (max-width: 1099px)"
              srcset={require("../src/assets/recipe-and-blog-mobile.png")}
            />
            <img
              className="support-img"
              src={Project2SupportImg}
              alt="Responsive image"
            />
          </picture>

          <div className="project-info">
            <div className="title">
              <h3>Recipe & Blogs - Recipe Website</h3>
              <a
                href="https://github.com/KeiferRamos/recipe-and-blogs"
                target="_blank"
              >
                <img src={GithubIcon} alt="" />
                <p>source code</p>
              </a>
            </div>
            <div className="project-tools">
              <div>
                <img src={GatsbyIcon} alt="" />
                <p>GatsbyJs</p>
              </div>
              <span>•</span>
              <div>
                <img className="contentful-icon" src={ContentfulIcon} alt="" />
                <p>Contentful</p>
              </div>
            </div>
            <div className="project-description">
              <p>
                Recipe and Blogs is a personal project featuring a variety of
                recipes and blog posts. The website boasts a clean design with
              </p>
              <p>
                Visit the website{" "}
                <span>
                  <a href="https://recipe-and-blogs.netlify.app/">here</a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <section>
          <div className="footer-description">
            <p> I hope you enjoy viewing my projects. </p>
            <p>Feel free to reach out with any questions or feedback!</p>
          </div>
          <br />
          <div>
            <p>You may contact me at my email: keiferramos2001@gmail.com</p>
          </div>
        </section>
        <section>
          <div className="links">
            <a
              href="https://www.facebook.com/keifer.ramos.146"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FbIcon} alt="" />
            </a>
            <a
              href="https://github.com/KeiferRamos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/keifer-ramos-409962244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="" />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
