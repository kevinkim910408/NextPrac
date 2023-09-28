'use client';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormInput from '@/contexts/FormInput';
import { fieldOptions } from '@/data/const';

const InputForm = () => {
  const methods = useForm();

  //temp
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="page-content">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="db-input-form-wrapper"
        >
          <div className="db-input-field-wrapper">
            <div className="db-input-field-column">
              <FormInput {...fieldOptions.name} />
              <FormInput {...fieldOptions.email} />
              <FormInput {...fieldOptions.age} />
            </div>

            <div className="db-input-field-column">
              <label htmlFor="hobby">Hobby (If have)</label>
              <div className="db-input-hobby-column">
                <FormInput {...fieldOptions.hobby1} />
                <FormInput {...fieldOptions.hobby2} />
                <FormInput {...fieldOptions.hobby3} />
              </div>
            </div>
          </div>

          <button type="submit" className="db-submit-btn">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default InputForm;
