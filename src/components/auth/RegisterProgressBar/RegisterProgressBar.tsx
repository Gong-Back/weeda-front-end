import { COLORS } from '@/constants/styles';
import * as styles from './RegisterProgressBar.style';

const STEPS = ['step1', 'step2', 'step3', 'step4'];

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
