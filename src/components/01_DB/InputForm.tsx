'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

const InputForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="page-content">
      <form
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        className="db-input-form-wrapper"
      >
        <div className="db-input-field-wrapper">
          <div className="db-input-field-column">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              placeholder="- First name only"
              {...register('name')}
            />

            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              placeholder="- example@email.com"
              {...register('email')}
            />

            <label htmlFor="age">AGE</label>
            <input
              id="age"
              type="number"
              placeholder="- 0"
              {...register('age')}
            />
          </div>

          <div className="db-input-field-column">
            <label htmlFor="hobby">Hobby (If have)</label>
            <div className="db-input-hobby-column">
              <input
                id="hobby"
                type="text"
                placeholder="- 1."
                {...register('hobby')}
              />
              <input
                id="hobby2"
                type="text"
                placeholder="- 2."
                {...register('hobby')}
              />
              <input
                id="hobby3"
                type="text"
                placeholder="- 3."
                {...register('hobby')}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="db-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
