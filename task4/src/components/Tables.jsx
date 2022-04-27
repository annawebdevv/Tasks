import {TableItem} from "./TableItem";

function Tables({ tables, guests }) {
  return (
    <div>
      {tables.map((table) => (
        <TableItem
          id={table.id}
          type={table.type}
          top={table.top}
          left={table.left}
          key={table.id}
          guests={guests}
        />
      ))}
    </div>
  );
}

export default Tables;
