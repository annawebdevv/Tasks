
function TableItem({id, type, top, left, guests}) {
let der = guests.filter(g => g.object_id === id)

    return ( 
        <div className={`table table${type} table${id}`}
        style={{ top: top, left: left }}>
            {der.map(i => <img alt='guest' src={i.avatar} className='guests_avatar' key={i.id}/> ) }
        </div>
     );
}

export default TableItem;