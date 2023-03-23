import { TUser } from '../../../../types/user_types';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';

const UserContactInfo = ({ data }: { data: TUser }) => {
  return (
    <div className="grid grid-cols-4 gap-5 col-span-4 px-2">
      <div>
        <div>Email</div>
        <div>{data?.email}</div>
      </div>
      <div>
        <div>Contact</div>
        <div>{convertPhoneNumber(data?.phone_number)}</div>
      </div>
      <div className="col-span-2">
        <div>Address</div>
        <div className="col-span-3 text-left">
          {data?.address} {data?.detail_address}
        </div>
      </div>
      {/* <div>Detail</div> */}
      {/* <div className="col-span-2"></div> */}
    </div>
  );
};

export default UserContactInfo;
