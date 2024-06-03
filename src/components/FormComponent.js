import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    input: '',
    textarea: '',
    checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-component">
      <div>
        <label>
          Input:
          <input
            type="text"
            name="input"
            value={formData.input}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Textarea:
          <textarea
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Checkbox:
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
