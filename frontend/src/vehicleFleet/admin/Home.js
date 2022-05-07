import React from 'react'
import { useNavigate } from "react-router-dom";

export const AdminHome = () => {


    const navigate = useNavigate();


    return (<div style={{ backgroundColor: 'blue' }}>

        <div style={{ height: 100, fontSize: 50 }}>ADMIN DASHBOARD</div>

        <div>WELCOME TO HOMEPAGE YOU CAN ONLY GO TO RELEVENT ACCESSIBLE PAGE!!</div>

        <div style={{ display: 'flex', flexDirection: 'row' }}><div onClick={() => {
            navigate('types')
        }} style={{ height: 100, width: 200, backgroundColor: 'lightblue', padding: 20, margin: 20 }}>Vehicle Management</div>
           </div>

    </div>)
}