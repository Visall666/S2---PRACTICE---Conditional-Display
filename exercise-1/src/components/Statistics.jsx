import React from "react";
import "../index.css";

function Statistics({ scores }) {

    const average = (scores.reduce((acc, val) => acc + val, 0) / scores.length).toFixed(2);
    const min = Math.min(...scores);
    const max = Math.max(...scores);

    return (
        <table className="statistics-table">
            <thead>
                <tr>
                    <th>AVERAGE</th>
                    <th>MIN</th>
                    <th>MAX</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{average}</td>
                    <td>{min}</td>
                    <td>{max}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Statistics;
