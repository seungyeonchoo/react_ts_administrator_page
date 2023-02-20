import { render } from '@testing-library/react';
import { mock, providerWrapper } from '../../../../service/__mock__';
import UserModal from '../UserModal';

const setUp = () => {
  const { container, getByText } = render(<UserModal showModal={true} />, {
    wrapper: providerWrapper(),
  });

  const nameInput = container.querySelector(`input[name='name']`);
  const emailInput = container.querySelector(`input[name='email']`);
  const genderInput = container.querySelector(`select[name='gender_origin']`);
  const birthdayInput = container.querySelector(`input[name='birth_date']`);
  const phoneNumberInput = container.querySelector(`input[name='phone_number']`);
  const createBtn = getByText('create') as HTMLButtonElement;
  const cancelBtn = getByText(/cancel/i) as HTMLButtonElement;

  return {
    nameInput,
    emailInput,
    genderInput,
    birthdayInput,
    phoneNumberInput,
    createBtn,
    cancelBtn,
  };
};

describe('User Modal Component', () => {
  it('should render create new user form', () => {
    const {
      nameInput,
      emailInput,
      genderInput,
      birthdayInput,
      phoneNumberInput,
      createBtn,
      cancelBtn,
    } = setUp();

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(genderInput).toBeInTheDocument();
    expect(birthdayInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
    expect(createBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  //   it('should handel show modal toggle', () => {
  //     // cancel/create click => show modal false
  //     // background clock => show modal false
  //   });

  //   describe('should post user input', async () => {
  //     it('should update user input value', () => {
  //       // userEvent.type => inputValue update by using useInput
  //     });
  //     describe('should post user input when create button is clicked', () => {
  //       it('with success', async () => {});
  //       it('with error', async () => {});
  //       it('while loading', async () => {});
  //     });
  //   });
});

export default {};

// - 고객명(name) : 가운데 글자 마스킹 필요, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기
//     - 고객명을 누를 경우 사용자 상세화면으로 이동합니다.
// - 보유중인 계좌수(account_count) : (해당 API 호출 후 데이터를 정제하여 표기)
// - 이메일 주소 (email)
// - 주민등록상 성별코드 (gender_origin)
// - 생년월일 (yyyy-mm-dd) (birth_date)
// - 휴대폰 번호 (가운데 4자리 `***` 로 마스킹 필요) (phone_number)
// - 최근로그인 (last_login)
// - 혜택 수신 동의 여부 (해당 API 호출 후 데이터를 정제하여 표기) (allow_marketing_push)
// - 활성화 여부 (해당 API 호출 후 데이터를 정제하여 표기) (is_active)
// - 가입일 (created_at)
