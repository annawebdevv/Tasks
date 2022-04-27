export const TableItem = ({ id, type, top, left, guests }) => {
  const filteredGuests = guests.filter((guest) => guest.object_id === id);

  return (
    <div className={`table table${type} table${id}`} style={{ top, left }}>
      {filteredGuests.map((guest) => (
        <img
          alt="guest"
          src={guest.avatar}
          className="guest_avatar"
          key={guest.id}
        />
      ))}
    </div>
  );
};
