import React from 'react';
import Table from "./Table"

const MeteorTable = ({meteors}) => {
    return (
        <table>
            <thead>
                <tr className="headers">
                    <th>name</th>
                    <th>id</th>
                    <th>mass</th>
                    <th>recclass</th>
                    <th>year</th>
                </tr>
            </thead>
            <tbody>
                {meteors.map((meteor) => {
                    return <Table key={meteor.id} meteorOne={meteor} />;
                })}
            </tbody>
        </table>
    );
};

export default MeteorTable;