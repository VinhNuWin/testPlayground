import { useState } from 'react';
import Dropdown from './Dropdown';

function DropdownPage({ raceEthnicity, socialMedia }) {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Instagram', value: 'Instagram' },
    { label: 'Facebook', value: 'Facebook' },
    { label: 'Tinder', value: 'Tinder' },
    { label: 'Email', value: 'Email' },
  ];
    
  // const raceEthnicity = [
  //   {label: 'White', value: 'White'},
  //   {label: 'Black or African American', value: 'Black or African American'},
  //   {label: 'American Indian or Alaskan Native', value: 'American Indian or Alaskan Native'},
  //   {label: 'Asian', value: 'Asian'},
  //   {label: 'Native Hawaiian or Other Pacific Islander', value: 'Native Hawaiian or Other Pacific Islander'},
  //   {label: 'Hispanic or Latino', value: 'Hispanic or Latino'},
  // ];



  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

// DropdownPage.protoTypes = {
//   options: PropTypes.string,
//   selection: PropTypes.string
// };

export default DropdownPage;
