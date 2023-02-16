import React from "react";
import PageHeader from "../../components/pageHeader";
import { TfiGallery } from "react-icons/tfi";
import "./main.scss";
import pharmacy from "./portfolio-images/Pharmacy.PNG";
import findx from "./portfolio-images/findx.PNG";
import template3 from "./portfolio-images/temp3.PNG";
import hangman from "./portfolio-images/hangman.PNG";
import template2 from "./portfolio-images/temp2.PNG";
import template1 from "./portfolio-images/temp1.PNG";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="Portfolio">
      <PageHeader text="Portfolio" icon={<TfiGallery size={40} />} />
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            {/*  pharmacy management sys*/}
            <figure className="shadow">
              <img src={pharmacy} alt="Pharmacy Management system" />
              <div className="hover">
                <button>
                  <a
                    href="https://ehabmdiab.github.io/Pharmacy-System/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/ehabmdiab/Pharmacy-System"
                    target="_blank"
                  >
                    github
                  </a>
                </button>
              </div>
            </figure>
            {/* findx */}
            <figure className="shadow">
              <img src={findx} />
              <div className="hover">
                <button>
                  <a href="" target="_blank">
                    Visit
                  </a>
                </button>
                <button>
                  <a href="https://github.com/ehabmdiab/FindX" target="_blank">
                    github
                  </a>
                </button>
              </div>
            </figure>
            {/* template 3*/}
            <figure className="shadow">
              <img src={template3} />
              <div className="hover">
                <button>
                  <a
                    href="https://ehabmdiab.github.io/Eh-template-3-html-css-js/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/ehabmdiab/Eh-template-3-html-css-js"
                    target="_blank"
                  >
                    github
                  </a>
                </button>
              </div>
            </figure>
            {/* hangman */}
            <figure className="shadow">
              <img src={hangman} />
              <div className="hover">
                <button>
                  <a
                    href="https://ehabmdiab.github.io/Hangman-Game/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/ehabmdiab/Hangman-Game"
                    target="_blank"
                  >
                    github
                  </a>
                </button>
              </div>
            </figure>
            {/* template 2 */}
            <figure className="shadow">
              <img src={template2} />
              <div className="hover">
                <button>
                  <a
                    href="https://ehabmdiab.github.io/template-2-Kasper-html-css-js-/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/ehabmdiab/template-2-Kasper-html-css-js-"
                    target="_blank"
                  >
                    github
                  </a>
                </button>
              </div>
            </figure>
            {/* template 1 */}
            <figure className="shadow">
              <img src={template1} />
              <div className="hover">
                <button>
                  <a
                    href="https://ehabmdiab.github.io/template-1-Leon-html-css/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/ehabmdiab/template-1-Leon-html-css"
                    target="_blank"
                  >
                    github
                  </a>
                </button>
              </div>
            </figure>
            {/* <figure className="shadow">
              <img src="" />
              <div className="hover">
                <button>
                  <a href="" target="_blank">
                    Visit
                  </a>
                </button>
                <button>
                  <a href="" target="_blank">
                    github
                  </a>
                </button>
              </div>
            </figure>
            <figure className="shadow">
              <img src="" />
              <div className="hover">
                <button>
                  <a href="" target="_blank">
                    Visit
                  </a>
                </button>
                <button>
                  <a href="" target="_blank">
                    github
                  </a>
                </button>
              </div>
            </figure>
            <figure className="shadow">
              <img src="" />
              <div className="hover">
                <button>
                  <a href="" target="_blank">
                    Visit
                  </a>
                </button>
                <button>
                  <a href="" target="_blank">
                    github
                  </a>
                </button>
              </div>
            </figure> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
