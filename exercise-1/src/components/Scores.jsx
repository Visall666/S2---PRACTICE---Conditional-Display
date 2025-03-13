import React from "react";
import Statistics from "./Statistics";
import "../index.css";

function Scores({ courseName, courseResults }) {
    const scores = courseResults.map((student) => student.score);

    return (
        <div className="scores">
            <h1>{courseName}</h1>
        
            {/* Score side */}
            <table className="score-table">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResults.map((student, index) => (
                        <tr key={index}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td className={student.score < 50 ? "warning" : ""}>{student.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Statistics side */}
            <Statistics scores={scores} />
        </div>
    );
}

export default Scores;
