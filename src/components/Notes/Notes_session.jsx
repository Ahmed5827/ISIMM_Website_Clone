import { useState } from 'react';
import './Notes.css';
import Note_element from './Note_element';
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
function Notes_session() {

    return(
        <div>
        <div id='List-Notes'>
        <h2>Module : informatique</h2>
        <table>
            <tr>
                <td><Note_element/></td>
                <td><Note_element/></td>
            </tr>
            <tr>
                <td><Note_element/></td>
                <td><Note_element/></td>
            </tr>
        </table>
        </div>
        <div id='List-Notes'>
        <h2>Module : mathématiques</h2>
        <table>
            <tr>
                <td><Note_element/></td>
                <td><Note_element/></td>
            </tr>
            <tr>
                <td><Note_element/></td>
                <td><Note_element/></td>
            </tr>
        </table>
        </div>
        <div id='List-Notes'>
        <h2>Moyenne de Génerale : 12 </h2>
        <h2>Admis <FcApproval size={35}/></h2>
        

        </div>

        </div>
    )


}
export default  Notes_session