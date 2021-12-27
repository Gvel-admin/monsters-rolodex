import { TableRow } from '../table-row/table-row.component';
import './table.style.css';

export const Table = (props) => {
  return (
    <>
      <table className="card-list-container">
        <thead>
          <tr>
            <td>Picture</td>
            <td>Identity</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {props.monsters.map((monster) => (
            <TableRow key={monster.id} monster={monster} />
          ))}
        </tbody>
      </table>
    </>
  );
};
