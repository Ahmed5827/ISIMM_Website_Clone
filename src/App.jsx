import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/Login/login";
import NotFound from "./components/commun/not-found";
import EtudiantListe from "./components/EtudiantListe/EtudiantListe";
import Emploi_etudiant from "./components/emploi_etudiant/emploi_etudiant";
import Profile_etudiant from "./components/Profile_etudiant/Profile_etudiant";
import List_examan from "./components/Examan/List_examan";
import Note_Tab from "./components/Notes/Note_Tab";
import Notes from "./components/Notes/Notes";
import "./App.css";
import Actual from "./components/actual/actual";
import Entreprise from "./components/Entreprise/Entreprise";
import Emploi_enseignant from "./components/Emploi_enseignant/Emploi_enseignant";
import Demande_Doc_Admin from "./components/Doc_Admin/Demande_Doc_Admin";
import Clubs from "./components/Clubs/Clubs";
import Departements from "./components/Departements/Departements";
import Formation from "./components/Formations/Formation (MIM)";
import FormationMIM from "./components/Formations/Formation (MIM)";
import FormationLM from "./components/Formations/Formation (LM)";
import FormationMRGL from "./components/Formations/Formation (MRGL)";
import FormationMRMI from "./components/Formations/Formation (MRMI)";
import Formations from "./components/Formations/Formations";
import RequireAuth from "./components/commun/requireAuth";
/**
 * DELETE JUST FOR TESTING
 */
import useAuth from "./hooks/useAuth";

function App() {
  /**
   * DELETE JUST FOR TESTING
   */
  const { auth } = useAuth();
  console.log("Auth in home: ", auth?.id_token);
  console.log("auth?.id_token: ", auth?.id_token);
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      element: <RequireAuth />,
      children: [
        {
          path: "/",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/formation",
          element: <Formations />,
        },
        {
          path: "/formation/LM",
          element: <FormationLM />,
        },
        {
          path: "/formation/MIM",
          element: <FormationMIM />,
        },
        {
          path: "/formation/MRGL",
          element: <FormationMRGL />,
        },
        {
          path: "/formation/MRMI",
          element: <FormationMRMI />,
        },
        {
          path: "/etudiants/etudiantListe",
          element: <EtudiantListe />,
        },
        {
          path: "/etudiants/emploiDeTemps",
          element: <Emploi_etudiant auth={auth} />,
        },
        {
          path: "/etudiants/examens",
          element: <List_examan />,
        },
        {
          path: "/etudiants/profile",
          element: <Profile_etudiant />,
        },
        {
          path: "/etudiants/notes",
          element: <Note_Tab />,
        },
        {
          path: "/entreprise",
          element: <Entreprise />,
        },
        {
          path: "/etudiants/notes2",
          element: <Notes />,
        },
        {
          path: "/entreprise",
          element: <Entreprise />,
        },
        {
          path: "/actualite",
          element: <Actual />,
        },
        {
          path: "/etudiants/clubs",
          element: <Clubs />,
        },

        ,
        { path: "/administration/documents", element: <Demande_Doc_Admin /> },
        { path: "/administration/departements", element: <Departements /> },

        {
          path: "/*",
          element: <NotFound />,
        },
        {
          path: "/actualites",
          element: <Actual />,
        },
      ],
    },
  ]);
  const styles = {
    //color: "green",
    borderWidth: 1,
    borderStyle: "solid",
  };
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <RouterProvider router={router} />
    </>
  );
}
//<RouterProvider router={router} />
export default App;
