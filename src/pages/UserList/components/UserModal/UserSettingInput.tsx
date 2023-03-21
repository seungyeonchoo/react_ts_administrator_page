interface Props {
  handleSettingInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserSettingInput = ({ handleSettingInputChange }: Props) => {
  return (
    <>
      <h2 className="text-lg font-bold test-slate-800 m-10">User Setting</h2>
      <section className="grid grid-cols-2 w-full text-sm">
        <label className="grid grid-cols-2 gap-6 p-3 items-center text-center">
          Staff
          <input type="checkbox" name="is_staff" onChange={handleSettingInputChange} />
        </label>

        <label className="grid grid-cols-2 gap-6 p-3 items-center text-center">
          Active
          <input type="checkbox" name="is_active" onChange={handleSettingInputChange} />
        </label>

        <label className="grid grid-cols-2 gap-6 p-3 items-center text-center">
          Invest Push
          <input type="checkbox" name="allow_invest_push" onChange={handleSettingInputChange} />
        </label>

        <label className="grid grid-cols-2 gap-6 p-3 items-center text-center">
          Marketing Push
          <input type="checkbox" name="allow_marketing_push" onChange={handleSettingInputChange} />
        </label>
      </section>
    </>
  );
};

export default UserSettingInput;
