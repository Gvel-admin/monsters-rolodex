export const TableRow = (props) => {
  return (
    <>
      <tr>
        <td>
          <img src={`https://robohash.org/${props.monster.id}`} alt="" />
        </td>
        <td>
          <strong>{props.monster.name}</strong>
        </td>
        <td>{props.monster.email}</td>
      </tr>
    </>
  );
};
