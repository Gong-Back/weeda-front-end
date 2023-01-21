import * as styles from './TestButton.style';

export interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <styles.ButtonContainer onPress={onPress}>
      <styles.ButtonLabel>{label}</styles.ButtonLabel>
    </styles.ButtonContainer>
  );
};

export default Button;
