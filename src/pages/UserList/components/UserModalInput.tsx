import LabelWithInput from '../../../component/Common/LabelWithInput';

const UserModalInput = () => {
  return (
    <form>
      <LabelWithInput labelTitle="name">
        <input type="text" name="name" />
      </LabelWithInput>

      <LabelWithInput labelTitle="phone number">
        <input type="text" name="phone_number" />
      </LabelWithInput>

      <LabelWithInput labelTitle="birth day">
        <input type="date" name="birth_date" />
      </LabelWithInput>

      <LabelWithInput labelTitle="email">
        <input type="email" name="email" />
      </LabelWithInput>

      <LabelWithInput labelTitle="gender">
        <select name="gender_origin">
          <option value={1}>Mr.</option>
          <option value={2}>Mrs.</option>
        </select>
      </LabelWithInput>
    </form>
  );
};

export default UserModalInput;
