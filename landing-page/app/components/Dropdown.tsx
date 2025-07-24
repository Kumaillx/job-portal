import { useState } from 'react';
import styles  from '@/styles/Dropdown.module.css';


interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: '', label: 'Software Development' },
  { value: 'option1', label: 'Business & Sales Development' },
  { value: 'option2', label: 'PR and Marketing' },
  { value: 'option3', label: 'QA' },
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