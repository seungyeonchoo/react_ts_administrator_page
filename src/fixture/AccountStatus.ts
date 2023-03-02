interface Status {
  [status_number: string]: string;
}

const ACCOUNT_STATUS: Status = {
  9999: '관리자확인필요',
  1: '입금대기',
  2: '운용중',
  3: '투자중지',
  4: '해지',
};

export default ACCOUNT_STATUS;
