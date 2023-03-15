import React from 'react';
import LabelWithInput from '../../../../component/Common/LabelWithInput';
import BROKER_LIST from '../../../../fixture/BrokerList';

interface Props {
  broker_id: string | null;
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AccountBrokerFilter = ({ handleFilter, broker_id }: Props) => {
  return (
    <LabelWithInput labelTitle="broker">
      <select name="broker_id" onChange={handleFilter} value={broker_id || 'null'}>
        <option value="null">total</option>
        {Object.keys(BROKER_LIST).map((broker: string) => (
          <option key={broker} value={broker}>
            {BROKER_LIST[broker]}
          </option>
        ))}
      </select>
    </LabelWithInput>
  );
};

export default AccountBrokerFilter;
