'use client';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { fieldOptions } from '@/data/const';
import { ReactHookFormInput } from '@/contexts';

const InputFormComponent = () => {
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
              <ReactHookFormInput {...fieldOptions.name} />
              <ReactHookFormInput {...fieldOptions.email} />
              <ReactHookFormInput {...fieldOptions.age} />
            </div>

            <div className="db-input-field-column">
              <label htmlFor="hobby">Hobby (If have)</label>
              <div className="db-input-hobby-column">
                <ReactHookFormInput {...fieldOptions.hobby1} />
                <ReactHookFormInput {...fieldOptions.hobby2} />
                <ReactHookFormInput {...fieldOptions.hobby3} />
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

export default InputFormComponent;
