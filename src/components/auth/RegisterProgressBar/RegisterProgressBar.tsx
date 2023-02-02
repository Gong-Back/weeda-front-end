import { COLORS } from '@/constants/styles';
import * as styles from './RegisterProgressBar.style';

const STEPS = ['step1', 'step2', 'step3', 'step4'];

/**
 * 회원가입 진행 상황을 나타내는 프로그레스 바 컴포넌트
 */
const RegisterProgressBar = ({ step }: { step: number }) => (
  <styles.BarWrap>
    {STEPS.map((s, idx) => (
      <styles.Indicator
        key={s}
        color={idx + 1 <= step ? COLORS.primary.main : COLORS.grayscale.gray2}
      />
    ))}
  </styles.BarWrap>
);

export default RegisterProgressBar;
