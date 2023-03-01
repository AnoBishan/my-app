import React from 'react';
import {FaEye, FaTrash} from "react-icons/fa";
import Create from "../components/create";
import Edit from "../components/edit";

function Home(){

    return(
<div className="home">
<h1>Dashboard</h1>
<Create/>
<table>
    <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Experience</th>
        <th>Change</th>
    </tr>
    <tr>
        <td>Sagar</td>
        <td>Kathmandu</td>
        <td>3 years+</td>
        <td><Edit/><FaEye/> <FaTrash/></td>
    </tr>
    <tr>
        <td>Sujan</td>
        <td>Dharan</td>
        <td>6 months+</td>
        <td><Edit/><FaEye/> <FaTrash/></td>
    </tr>
    <tr>
        <td>Pradip</td>
        <td>Pokhara</td>
        <td>1 year+</td>
        <td><Edit/><FaEye/> <FaTrash/></td>
    </tr>
    <tr>
        <td>Bishan</td>
        <td>Birtamod</td>
        <td>1 month+</td>
        <td><Edit/><FaEye/> <FaTrash/></td>
    </tr>
</table>
</div>
    )
}
export default Home;