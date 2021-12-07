import React from 'react';
import Select from 'react-select';

function SelectInput({options, selectedOption, handleChange}) {
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };
  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
    return (
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        formatGroupLabel={formatGroupLabel}
      />
    );

}

export default SelectInput;