import React, { useState } from 'react';
import { COLORS, getRelativeHeight } from '@/constants/styles';
import { InputNameType } from '@/constants/types';
import AuthHeader from '@/components/auth/AuthHeader';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import * as styles from './RegisterTemplate.style';
import TextInput from '@/components/common/TextInput';

interface RegisterStep3Props {
  gender: 'male' | 'female';
  age: number;
  onInputChange: (name: InputNameType, value: string | number) => void;
  onBtnPress: () => void;
}

const RegisterStep3 = ({
  gender,
  age,
  onInputChange,
  onBtnPress,
}: RegisterStep3Props) => {
  const getBtnColor = (active: boolean) =>
    active ? COLORS.primary.main : COLORS.grayscale.gray3;
  const [date, setDate] = useState(new Date());
  return (
    <styles.StepViewWrap>
      <AuthHeader
        title="회원가입"
        description="당신의 정보가 궁금해요!"
        style={{ marginBottom: getRelativeHeight(100) }}
      />
      <styles.InfoInputWrap>
        <Text
          textStyleName="subtitle2B"
          color={COLORS.grayscale.gray6}
          style={{ marginBottom: 30 }}
        >
          성별
        </Text>
        <styles.GenderBtnsWrap>
          <Button
            title="남성"
            onPress={() => onInputChange('gender', 'male')}
            backgroundColor="transparent"
            color={getBtnColor(gender === 'male')}
            borderColor={getBtnColor(gender === 'male')}
            style={styles.gBtnStyle}
          />
          <Button
            title="여성"
            onPress={() => onInputChange('gender', 'female')}
            backgroundColor="transparent"
            color={getBtnColor(gender === 'female')}
            borderColor={getBtnColor(gender === 'female')}
            style={styles.gBtnStyle}
          />
        </styles.GenderBtnsWrap>
      </styles.InfoInputWrap>
      <styles.InfoInputWrap>
        <Text
          textStyleName="subtitle2B"
          color={COLORS.grayscale.gray6}
          style={{ marginBottom: 30 }}
        >
          나이
        </Text>
        <TextInput
          value={String(age)}
          onChangeText={(t) => onInputChange('age', t)}
          placeholder="나이를 입력해주세요"
          style={styles.InputStyle}
        />
      </styles.InfoInputWrap>
      <styles.ButtonWrap>
        <Button
          title="다음"
          onPress={onBtnPress}
          backgroundColor="transparent"
          color={COLORS.primary.main}
          borderColor={COLORS.primary.main}
          borderWidth={1}
        />
      </styles.ButtonWrap>
    </styles.StepViewWrap>
  );
};

export default RegisterStep3;
