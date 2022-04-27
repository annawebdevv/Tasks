import TableItem from "./TableItem";

function Tables({ table, guests }) {

    return (
        <div>
            {table.map(t => <TableItem id={t.id} type={t.type} top={t.top} left={t.left} key={t.id} guests={guests}/>)}
        </div>
    );
}


export default Tables;