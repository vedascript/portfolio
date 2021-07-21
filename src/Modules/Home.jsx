import React from "react";
import CustomNav from "../Components/NavBar";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CodingSvg from "../Icons/coding";
import useWindowDimensions from "../utils/dimensionHelper";

// library.add()

const Home = ({ history }) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <CustomNav />
      <div
        className="position-absolute"
        style={{
          height: "100vh",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <Container className="h-100">
          <div className="d-flex h-100">
            <div className={`my-auto ${width > 760 ? "w-50" : ""}`}>
              <div>
                <div className="">
                  <span className="color-customBlueLight h5 font-weight-bold">
                    Hello !
                  </span>
                  <br />
                  <span className="color-customBlue h1 font-weight-bold">
                    I'm Vedansh
                  </span>
                  <br />
                  <span className="color-customBlueLight h3">
                    I'm a <span className="font-weight-bold">full stack</span>{" "}
                    developer
                  </span>
                  <br />
                  <br />
                  <span className="color-customBlueLight h5">
                    I enjoy developing websites and web applications.
                  </span>
                  <br />
                </div>
                <div>
                  <div className="d-flex mt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/vedascript"
                      className="color-customBlue p-0 mr-3"
                    >
                      <FontAwesomeIcon size="2x" icon={faGithubSquare} />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/vedanshwani"
                      className="color-customBlue p-0 mr-3"
                    >
                      <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </a>
                  </div>
                  <br />
                  <Button
                    className="bg-customBlue font-weight-bold shadow border-0"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    Resume
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block">
              <CodingSvg />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
