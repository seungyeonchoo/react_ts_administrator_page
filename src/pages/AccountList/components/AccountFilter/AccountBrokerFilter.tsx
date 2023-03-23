import React from 'react';
import BROKER_LIST from '../../../../fixture/BrokerList';

interface Props {
  broker_id: string | null;
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AccountBrokerFilter = ({ handleFilter, broker_id }: Props) => {
  return (
    <label className="flex flex-col text-center text-xs">
      Broker
      <select
        name="broker_id"
        onChange={handleFilter}
        value={broker_id || 'null'}
        className="text-center p-1 border border-slate-500 mt-1"
      >
        <option value="null">total</option>
        {Object.keys(BROKER_LIST).map((broker: string) => (
          <option key={broker} value={broker}>
            {BROKER_LIST[broker]}
          </option>
        ))}
      </select>
    </label>
  );
};

export default AccountBrokerFilter;
