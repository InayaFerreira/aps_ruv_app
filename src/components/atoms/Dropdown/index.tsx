/* eslint-disable react-native/no-inline-styles */
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';

import CheckIcon from '@icons/check.svg';

import { COLORS } from '@styles/colors';

import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';

interface IDropdownProps {
  label?: string;
  placeholder?: string;
  items: any[];
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const Dropdown: React.FC<IDropdownProps> = ({
  label,
  placeholder,
  items,
  value,
  setValue,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {label && (
        <>
          <CustomText color="grayDarker">{label}</CustomText>
          <Spacer top={8} />
        </>
      )}

      <DropDownPicker
        translation={{ NOTHING_TO_SHOW: '' }}
        style={{
          paddingHorizontal: 16,
          borderColor: COLORS.grayLight,
          borderRadius: 6,
        }}
        dropDownContainerStyle={{
          borderColor: COLORS.grayLight,
          borderRadius: 6,
        }}
        textStyle={{
          fontFamily: 'Inter',
          color: COLORS.grayDarker,
        }}
        TickIconComponent={() => <CheckIcon stroke={COLORS.primary} />}
        listItemContainerStyle={{
          borderColor: COLORS.grayLight,
          borderBottomWidth: 1,
        }}
        placeholder={placeholder}
        listMode="SCROLLVIEW"
        open={isOpen}
        value={value}
        items={items}
        setOpen={setIsOpen}
        setValue={setValue}
      />
    </>
  );
};

export default Dropdown;
