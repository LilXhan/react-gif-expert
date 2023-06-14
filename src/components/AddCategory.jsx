import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('One punch')

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  };
  

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (  
    <form method='POST' onSubmit={ onSubmit }>
          <input
            name="category"
            id="category"
            type="text"
            value={ inputValue }
            onChange={ onInputChange }
          ></input>          
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func
}
