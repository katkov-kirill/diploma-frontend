import * as React from 'react';

import Select from 'react-select';

type Props = {
  defaultValue: string | number;
  options: { label: string; value: string | number }[];
  onChange: (value: string | number) => void;
  placeholder?: string;
  isClearable?: boolean;
};

const styles = {
  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: 'transparent',
    height: '64px',
    borderRadius: '15px',
    borderWidth: '2px',
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: '#fff',
  }),
  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: '#9ca3af',
  }),
  valueContainer: (defaultStyles) => ({
    ...defaultStyles,
    padding: '0 20px',
    fontSize: '20px',
  }),
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? '#fff' : '#242424',
    backgroundColor: state.isSelected ? '#5d6ad1' : '#fff',
    ':hover': {
      color: '#fff',
      backgroundColor: '#5d6ad1',
    },
  }),
};

export const Dropdown: React.FC<Props> = ({
  defaultValue,
  options,
  label,
  onChange,
  placeholder,
  isClearable,
}) => (
  <Select
    onChange={onChange}
    styles={styles}
    options={options}
    placeholder={placeholder ?? 'Select...'}
    isClearable={isClearable}
  />
);
