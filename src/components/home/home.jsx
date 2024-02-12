import React, { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';
import NavBar from "../commun/navbar/NavBar";
import Slider from "react-slick";
import "./home.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import isimm1 from "../../assets/isimm1.jpg";
import isimmcous from "../../assets/cours.jpeg" 
import pfp from "../../assets/amphi.jpg";
import clubsbg from "../../assets/clubs.png";
import Footer_1 from "../Footer_1/Footer_1";
import Grades from "../../assets/grades.jpg";
import Examan from "../../assets/Examan.jpg";
import Ins from "../../assets/inscriptions.jpg";
import Rattrapage from "../../assets/rattrapage.jpg";
import Emp from "../../assets/emploi-du-temps-en-ligne.jpg";
import Event from "../../assets/Event.jpg";
import Exchange from "../../assets/Exchange.jpg";
import logo from "../../assets/logo.png";
import Footer from "../commun/footer/footer";
import NavBar2 from "../commun/navbar/NavBar2";

const vieEstudiantineSubmenu = [
  { name: "Profile", path: "/etudiants/profile" },
  { name: "Cosulter Calendrier Examen", path: "/etudiants/examens" },
  { name: "Cosulter Notes ", path: "/etudiants/notes" },
  { name: "Cosulter Liste Etudiant", path: "/etudiants/etudiantListe" },
  { name: "Clubs", path: "/etudiants/clubs" },
  { name: "Emploi de Temps", path: "/etudiants/emploiDeTemps" },
];

const navBarItems = [
  { name: "Notre Université", path: "/home" },
  { name: "Actuailités", path: "/actualites" },
  { name: "Administration", path: "/administration" },
  { name: "Entreprise", path: "/entreprise" },
  {
    name: "Vie estudiantine",
    path: "/vie-estudiantine",
    submenu: vieEstudiantineSubmenu,
  },
  { name: "A propos", path: "/about" },
];
const listGroupItems = [
  { name: "Etudiants", _id: "0" },
  { name: "Actualités", _id: "1" },
  { name: "Documents", _id: "2" },
  { name: "Lois", _id: "3" },
];
const actualiteItems = [
  {
    title: "Notes",
    Describtion: "Consulter vos notes",
    Date: "12/10/2025",
  },
  {
    title: "Calendrier des Examan",
    Describtion: "Consulter calendrier Examen",
    Date: "12/10/2025",
  },
  {
    title: "Paiement Tranche Trimestre 2",
    Describtion:"Veuillez payer la deuxieme tranche de l'anneé universitaire 2023-2024",
    Date: "12/10/2025",
  },
];


const News = () => {
  return (
    <div class="cards">
      {actualiteItems.map((e, index) => {
        let image;

        if (e.title === "Notes") {
          image = Grades;
        } else if (e.title === "Calendrier des Examan") {
          image = Examan;
        } else if (e.title === "Inscription") {
          image = Ins;
        } else if (e.title === "Rattrapage") {
          image = Rattrapage;
        } else if (e.title === "Emploi du temps") {
          image = Emp;
        } else if (e.title === "Event") {
          image = Event;
        } else if (e.title === "Exchange program") {
          image = Exchange;
        } else {
          image = logo;
        }
        const openLink = () => {
          //change the facebook link with e.Link
          window.open("https://www.facebook.com/", "_blank");
        };

        return (
          <div onClick={openLink}  key={index}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img id="ph" src={image} alt="Avatar" />
                  <p>{e.title}</p>
                  <p>{e.Date}</p>
                </div>
                <div class="flip-card-back">
                  <h5>Discription :</h5>
                  <p>{e.Describtion}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Home = () => {
  return (
    <>
    <div style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
      <NavBar id="navi" items={navBarItems} />
      </div>
      
      <Carousel id="Carousel" style={{ zIndex: 1 }}>
      <Carousel.Item>
        <img height={700} src={isimm1}></img>
        <Carousel.Caption>
          <h3>Entrée de ISIMM</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height={700} src={pfp}></img>
        <Carousel.Caption>
          <h3>Amphi de ISIMM</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height={700} src={isimmcous}></img>
        <Carousel.Caption>
          <h3>Cour de ISIMM</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <section style={{ minHeight: "100px" }}>


        <div className="aboutUs" >      <div className="ACCHolder">
          <section className="isimmDescriptionSection">
            <h2 className="title">Accueil</h2>
            <div className="ISIMMDescription">
            <p> Bienvenue sur le site officiel de l’Institut Supérieur d’Informatique et de Mathématiques de Monastir (ISIMM).  
            Cette plateforme vous permet de découvrir les différentes formations assurées par l’ISIMM, la vie-estudiantine, l’entreprenariat avec le milieu socio-économique, le tissu industriel peut intervenir par la proposition des stages et des emplois pour les étudiants et les diplômés de l’ISIMM.
            
            Ceci est une très bonne occasion pour ouvrir des perspectives devant nos étudiants pour faire preuve d’initiatives dans le domaine qui leur est cher !
            A travers cette plateforme, les enseignants et les étudiants ainsi que le staff administratif peuvent accéder à leurs comptes personnels à distance  afin de faciliter la communication entre eux.  </p>
           
            </div>
          </section>
        </div>
        <div className="ISIMMHolder">
          <section className="isimmDescriptionSection">
            <h2 className="title">Nos Formations</h2>
              <div className="aboutUs_content">
                <div className="department">
                  <h4>Département</h4>
                  <ul>
                    <li><a className="FormationLink" > Informatique</a></li>
                    <li><a className="FormationLink" >Mathématique</a></li>
                    <li><a className="FormationLink" >Technologie</a></li>
                  </ul>
                </div>
                <div className="cycles">
                  <h4>Cycles</h4>
                  <ul>
                    <li><a className="FormationLink" >Cycle Préparatoire</a></li>
                    <li><a className="FormationLink" > Licence</a></li>
                    <li><a className="FormationLink" >Mastére Professionelle</a></li>
                    <li><a className="FormationLink" >Mastére de Recherche</a></li>
                    <li><a className="FormationLink" >Ingénieurs</a></li>
                  </ul>
                </div>
              </div>
              <a id="allnews" href="http://www.isimm.rnu.tn/public/formation">Voir Plus <FaArrowAltCircleRight/></a>
          </section>
        </div>

        </div>
      

        <div className="news1">
        <h2 className="title mt-5 mb-5">Actualité</h2>
        {News()}
        <a id="allnews" href="http://www.isimm.rnu.tn/public/specific_news">Tous les Actualité <FaArrowAltCircleRight/></a>
        <br/><br/>
        </div>




        <div className="clubsHolder">
          <section className="clubsDescriptionSection">
            <h2 className="title">Clubs</h2>
            <div className="clubsDescription">
<p>
            L'Institut Supérieur d'Informatique et de Mathématiques de Monastir,
             abrite une variété dynamique de clubs qui reflètent la diversité des intérêts et des passions de ses étudiants. 
             Parmi ces clubs, on trouve souvent des groupes dédiés à la programmation, à la robotique et à l'intelligence artificielle.
              Ces clubs offrent aux étudiants l'opportunité de mettre en pratique leurs compétences académiques, de participer à des projets innovants et de collaborer avec d'autres passionnés du domaine. 
              En outre, des clubs axés sur le partage de connaissances, tels que des clubs de tutorat et d'entraide, contribuent à renforcer la cohésion au sein de la communauté étudiante. 
              </p>
            </div>
          </section>

          <section className="clubsLogoSection">
            <div className="clubsImg">
            <h1>clubs</h1>
              <img id="clubph" src={clubsbg} alt="Clubs Icon" />
            </div>
          </section>
          
        </div>
      </section>
      <div className="lastinfo">
      <div className="location">
      <h2>Sur la carte</h2>
      <iframe width={600} height={400} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.4779705299206!2d10.839891632041052!3d35.763633678456564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x528cc1e524eece77!2sInstitut+Sup%C3%A9rieur+d'Informatique+et+de+Math%C3%A9matiques+de+Monastir!5e0!3m2!1sfr!2sfr!4v1501539942560"  ></iframe>
      </div>
      <div className="Show">
      <h2>Tour dans ISIMM</h2>
      <iframe width={600} height={400} src="https://www.youtube-nocookie.com/embed/LY-BTpTHmEw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""  ></iframe>
      </div></div>
      <Footer_1/>
    </>
  );
};

export default Home;
