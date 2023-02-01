import { useState } from 'react';
import { COLORS } from '@/constants/styles';
import { InputNameType, RegisterInputsType } from '@/constants/types';
import { useNavigation } from '@react-navigation/native';
import LeftIcon from '@/assets/icons/Left.svg';

import RegisterStep1 from './RegisterStep1';
import RegisterStep2 from './RegisterStep2';
import RegisterStep3 from './RegisterStep3';
import RegisterStep4 from './RegisterStep4';
import * as styles from './RegisterTemplate.style';
import RegisterProgressBar from '../RegisterProgressBar';

export interface RegisterTemplateProps {
  inputs: RegisterInputsType;
  onInputChange: (name: InputNameType, value: string | number) => void;
}

const RegisterTemplate = ({ inputs, onInputChange }: RegisterTemplateProps) => {
  const [step, setStep] = useState(1);
  const navigation = useNavigation();
  const {
    email,
    password,
    passwordCheck,
    name,
    gender,
    age,
    nickname,
    profileImg,
  } = inputs;

  // 다음 단계로 이동
  function goForward() {
    setStep((prev) => prev + 1);
  }

  // 이전 단계로 이동
  function goBack() {
    if (step !== 1) setStep((prev) => prev - 1);
    else navigation.goBack();
  }

  /**
   * 회원가입 단계에 따른 View 반환
   */
  function setRegisterStep(step: number) {
    switch (step) {
      case 1:
        return (
          <RegisterStep1
            email={email}
            password={password}
            passwordCheck={passwordCheck}
            onInputChange={onInputChange}
            onBtnPress={goForward}
          />
        );
      case 2:
        return (
          <RegisterStep2
            name={name}
            onInputChange={onInputChange}
            onBtnPress={goForward}
          />
        );
      case 3:
        return (
          <RegisterStep3
            gender={gender}
            age={age}
            onInputChange={onInputChange}
            onBtnPress={goForward}
          />
        );
      case 4:
        return (
          <RegisterStep4
            nickname={nickname}
            profileImg={profileImg}
            onInputChange={onInputChange}
            onBtnPress={goForward}
          />
        );
      default:
        return <></>;
    }
  }

  return (
    <styles.Template>
      <styles.BackBtnWrap onPress={goBack}>
        <LeftIcon fill={COLORS.grayscale.gray5} />
      </styles.BackBtnWrap>
      <styles.ProgressBarWrap>
        <RegisterProgressBar step={step} />
      </styles.ProgressBarWrap>
      {setRegisterStep(step)}
    </styles.Template>
  );
};

export default RegisterTemplate;