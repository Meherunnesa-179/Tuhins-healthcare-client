import React from "react";
import Bg from "../../images/banner/images.jfif"
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import useContent from "../../Hooks/useContent";
import Specialists from "../../Specialists/Specialists";

const Home = () => {
  const history = useHistory();
  const [specialist] = useContent();
  const features = specialist.slice(0, 6);
  function GoServices() {
    history.push("/about");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce top cascade>
                <h1 className="">Tuhin's HealthCare</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4  fs-5">
                  Not Just A Better Healthcare , But A Better Healthcare Experience ...
                </p>
              </Bounce>

              <Bounce>
                <Button
                  onClick={GoServices}
                  className="rounded-pill fs-5 py-2 px-4"
                  variant="primary"
                >
                  View more
                </Button>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{  backgroundAttachment: "fixed" }}
      >
        <Container className="py-5">
          <Slide top>
          <h2 className="text-center  mb-2">Good Help to Those in Need</h2>
          </Slide>
          <Slide top>
        
            <p className="text-muted text-center">
              Here you can find all the specialists
            </p>
          </Slide>
            <div className=" row row-cols-1 row-cols-md-3 g-4  m-4">
          {
          features?.map(specialists => <Specialists
            key = {specialists.id}
            specialists = {specialists}>
            </Specialists>
          )};
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;