import { useState } from 'react';
import styles  from '@/styles/Dropdown.module.css';


interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'SD', label: 'Software Development' },
  { value: 'BD', label: 'Business & Sales Development' },
  { value: 'MR', label: 'PR and Marketing' },
  { value: 'QA', label: 'QA' },
];

const Dropdown: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div  className={styles.ddwn}>
      <label htmlFor="dropdown">Choose your job category:</label>
      <select 
      className={styles.bar}
      id="dropdown" value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default Dropdown;