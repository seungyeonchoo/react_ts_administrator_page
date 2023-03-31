interface Props {
  handleSettingInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserSettingInput = ({ handleSettingInputChange }: Props) => {
  return (
    <section className="grid grid-cols-2 w-full text-sm mt-3">
      <label className="grid grid-cols-2 gap-6 p-3 items-center text-center">
        staff
        <input type="checkbox" name="is_staff" onChange={handleSettingInputChange} />
      </label>

      <label className="grid grid-cols-2 gap-6 p-3 items-center text-center">
        active
        <input type="checkbox" name="is_active" onChange={handleSettingInputChange} />
      </label>

      <label className="grid grid-cols-2 gap-6 p-3 items-center text-center">
        invest push
        <input type="checkbox" name="allow_invest_push" onChange={handleSettingInputChange} />
      </label>

      <label className="grid grid-cols-2 gap-6 p-3 items-center text-center">
        marketing push
        <input type="checkbox" name="allow_marketing_push" onChange={handleSettingInputChange} />
      </label>
    </section>
  );
};

export default UserSettingInput;
