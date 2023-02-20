const UserModal = ({ showModal }: { showModal: boolean }) => {
  return (
    <dialog open={showModal}>
      <span>create new user</span>
      <form>
        <input type="text" name="name" />
        <input type="number" name="phone_number" />
        <input type="date" name="birth_date" />
        <input type="email" name="email" />
        <select name="gender_origin">
          <option value={1}>Mr.</option>
          <option value={2}>Mrs.</option>
        </select>
      </form>
      <div>
        <button>create</button>
        <button>cancel</button>
      </div>
    </dialog>
  );
};

export default UserModal;
