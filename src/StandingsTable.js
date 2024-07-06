import React from 'react';
import './StandingsTable.css'; 
import indiaFlag from './images/india.png';
import usaFlag from './images/usa.png';
import pakistanFlag from './images/pakistan.png';
import canadaFlag from './images/canada.png';
import irelandFlag from './images/ireland.png';

const StandingsTable = () => {
  return (
    <div className="standings-table">
      <div className="table-header">
        <h2>Standings</h2>
        <div className="groups">
          <span className="group active">GROUP A</span>
          <span className="group">GROUP B</span>
          <span className="group">GROUP C</span>
          <span className="group">GROUP D</span>
          <span className="group">GROUP E</span>
          
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>POS</th>
            <th className="team-column">TEAM</th>
            <th>PLD</th>
            <th>NRR</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="team-column">
              <img src={indiaFlag} alt="IND" className="flag" />
              IND
            </td>
            <td>4</td>
            <td>+1.137</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="team-column">
              <img src={usaFlag} alt="USA" className="flag" />
              USA
            </td>
            <td>4</td>
            <td>+0.127</td>
            <td>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="team-column">
              <img src={pakistanFlag} alt="PAK" className="flag" />
              PAK
            </td>
            <td>4</td>
            <td>+0.294</td>
            <td>4</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="team-column">
              <img src={canadaFlag} alt="CAN" className="flag" />
              CAN
            </td>
            <td>4</td>
            <td>-0.493</td>
            <td>3</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="team-column">
              <img src={irelandFlag} alt="IRE" className="flag" />
              IRE
            </td>
            <td>4</td>
            <td>-1.293</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StandingsTable;
