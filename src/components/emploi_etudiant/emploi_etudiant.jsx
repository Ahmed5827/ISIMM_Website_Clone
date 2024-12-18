import { useEffect, useState } from "react";
import SelectItem from "./selectItem";
import "./emploi_etudiant.css";
import Session_item from "./session_item";
import html2pdf from "html2pdf.js";
import NavBar2 from "../commun/navbar/NavBar2";
import Footer1 from "../Footer_1/Footer_1";
import "../../hooks/useAuth";
import courses from "../../Data/classes.json";
import emploi from "../../Data/emploi.json";
import axios from "axios";

function Emploi_etudiant({ auth }) {
  //const [coursesData, setCoursesData] = useState([]);
  const [classe, setClasse] = useState("");
  const [filiere, setFiliere] = useState("");
  const [TD, setTD] = useState("");
  const [classeFiliereTD, setClasseFiliereTD] = useState("");

  async function generatePdf() {
    //const element = document.getElementById("Tab");
    //html2pdf(element);
    try {
      const headers = new Headers({
        Authorization: "Bearer " + auth?.id_token, // Replace with actual token
      });
      console.log("token: ", "Bearer " + auth?.id_token);
      const response = await fetch("http://localhost:8080/api/download-pdf", {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger download
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download =
        "Emploi " + classe + " " + filiere + " " + TD + ".pdf";
      downloadLink.style.display = "none"; // Hide the link

      // Append and trigger click immediately (no need to remove)
      document.body.appendChild(downloadLink);
      downloadLink.click();
    } catch (error) {
      console.error("Error downloading PDF:", error);
      // Handle errors appropriately, like displaying an error message to the user
    }
  }
  let tab;
  if (TD !== "") {
    tab = (
      <table className="table table-striped" border={1}>
        <thead>
          <tr>
            <th>Horaire</th>
            <th>8:30_10:00</th>
            <th>10:15_11:45</th>
            <th>12:00_13:00</th>
            <th>13:00_14:30</th>
            <th>14:45_16:15</th>
            <th>16:30_18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lundi</td>
            {console.log("emploi ->", emploi)}
            {Object.keys(emploi[classeFiliereTD]["monday"]).map((time) => {
              return emploi[classeFiliereTD]["monday"][time] === undefined ? (
                <td>undefined</td>
              ) : (
                <td>
                  {generateSessionItem(emploi[classeFiliereTD]["monday"][time])}
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Mardi</td>
            {Object.keys(emploi[classeFiliereTD]["tuesday"]).map((time) => {
              return emploi[classeFiliereTD]["tuesday"][time] === undefined ? (
                <td></td>
              ) : (
                <td>
                  {generateSessionItem(
                    emploi[classeFiliereTD]["tuesday"][time]
                  )}
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Mercredi</td>
            {Object.keys(emploi[classeFiliereTD]["wednesday"]).map((time) => {
              return emploi[classeFiliereTD]["wednesday"][time] ===
                undefined ? (
                <td></td>
              ) : (
                <td>
                  {generateSessionItem(
                    emploi[classeFiliereTD]["wednesday"][time]
                  )}
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Jeudi</td>
            {Object.keys(emploi[classeFiliereTD]["thursday"]).map((time) => {
              return emploi[classeFiliereTD]["thursday"][time] === undefined ? (
                <td></td>
              ) : (
                <td>
                  {generateSessionItem(
                    emploi[classeFiliereTD]["thursday"][time]
                  )}
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Vendredi</td>
            {Object.keys(emploi[classeFiliereTD]["friday"]).map((time) => {
              return emploi[classeFiliereTD]["friday"][time] === undefined ? (
                <td></td>
              ) : (
                <td>
                  {generateSessionItem(emploi[classeFiliereTD]["friday"][time])}
                </td>
              );
            })}
          </tr>
          <tr>
            <td>Samedi</td>
            {Object.keys(emploi[classeFiliereTD]["saturday"]).map((time) => {
              return emploi[classeFiliereTD]["saturday"][time] === undefined ? (
                <td></td>
              ) : (
                <td>
                  {generateSessionItem(
                    emploi[classeFiliereTD]["saturday"][time]
                  )}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  } else {
    tab = (
      <table class="table table-striped" border={1}>
        <thead>
          <tr>
            <th>Horaire</th>
            <th>8:30_10:00</th>
            <th>10:15_11:45</th>
            <th>12:00_13:00</th>
            <th>13:00_14:30</th>
            <th>14:45_16:15</th>
            <th>16:30_18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td id="Lundi1">
              <Session_item />
            </td>
            <td id="Lundi2">
              <Session_item />
            </td>
            <td id="Lundi3"></td>
            <td id="Lundi4">
              <Session_item />
            </td>
            <td id="Lundi5">
              <Session_item />
            </td>
            <td id="Lundi6">
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td id="Mardi1">
              <Session_item />
            </td>
            <td id="Mardi2">
              <Session_item />
            </td>
            <td id="Mardi3"></td>
            <td id="Mardi4">
              <Session_item />
            </td>
            <td id="Mardi5">
              <Session_item />
            </td>
            <td id="Mardi6">
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Mercredi</td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td></td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td></td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td></td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td></td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
            <td>
              <Session_item />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  const handleClasseChange = (e) => {
    setClasse(e.target.value);
    setFiliere("");
    setTD("");
  };
  const handleFiliereChange = (e) => {
    setFiliere(e.target.value);
    setTD("");
  };
  const handleTDChange = (e) => {
    const td = e.target.value;
    setTD(td);
    setClasseFiliereTD(courses["Courses"][classe][filiere][td]);
    console.log("classeFiliereTD: ", courses["Courses"][classe][filiere][td]);
  };
  function generateSessionItem(emploiAtTime) {
    const classe = emploiAtTime["classe"];
    const prof = emploiAtTime["prof"];
    const matiere = emploiAtTime["matiere"];
    const salle = emploiAtTime["salle"];
    return (
      <Session_item
        classe={classe}
        prof={prof}
        matiere={matiere}
        salle={salle}
      />
    );
  }
  return (
    <div id="B">
      <NavBar2></NavBar2>
      <div id="tablee">
        <div id="title">
          <p id="uni">
            Université supérieur d'informatique et du mathématique de Monastir
          </p>
          <p id="class">
            Groupe TD : {TD} <br />
            <p id="date">(à partir de 01/09/2024)</p>
          </p>
        </div>
        <div id="classeSelect" className="selectEmploi">
          <p>Choisir votre Classe</p>

          <SelectItem
            items={courses["Courses"]}
            value={classe}
            onChange={handleClasseChange}
          />
        </div>
        {classe !== "" ? (
          <div id="filiere" className="selectEmploi">
            <p>Choisir votre Filière</p>
            <SelectItem
              items={courses["Courses"][classe]}
              value={filiere}
              onChange={handleFiliereChange}
            />
          </div>
        ) : null}
        {filiere !== "" ? (
          <div id="TD" className="selectEmploi">
            <p>Choisir votre Groupe TD:</p>
            <SelectItem
              items={courses["Courses"][classe][filiere]}
              value={TD}
              onChange={handleTDChange}
            />
          </div>
        ) : null}

        <div id="table">
          {tab}
          <button class="btn btn-primary" onClick={generatePdf}>
            Imprimer
          </button>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}
export default Emploi_etudiant;
