import React from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="text-center color-app">Contacts Backup Restore</h1>
      <h4 className="text-center">ne perdez plus vos contacts</h4>
      <p className="text-center">
        Sauvegardez ou restaurez vos contacts en toute sécurité et gratuiement
      </p>
      <div className="row">
        {images.map((i) => {
          return (
            <div key={i} className="col-12 col-md-6 col-lg-4  mt-4">
              <img
                alt="scrrenshot"
                src={i}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <p className="text-cener mt-2 mb-2">
          Contacts Backup Restore est une application qui vous permet de
          sauvegarder et de restaurer vos contacts en toute sécurité et
          gratuitement.
        </p>
        <p className="text-center">*Ensemble Construisons Notre Avenir*</p>
        <p className="text-center">
          contact:{" "}
          <a href="mailto:babacar.mbengue10@gmail.com">
            babacar.mbengue10@gmail.com
          </a>
        </p>
        <p className="text-center">copyright © 2020 Babacar Mbengue</p>
      </div>
    </div>
  );
};

export default Home;
