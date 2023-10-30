'use client';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { fieldOptions } from '@/data/const';
import { ReactHookFormInput } from '@/contexts';

interface DataType {
  name: string;
  email: string;
  age: string;
  hobbh1?: string;
  hobbh2?: string;
  hobbh3?: string;
}

const InputFormComponent = ({ dbtype }: { dbtype: string }) => {
  const methods = useForm();

  const onSubmit = async (data: any) => {
    try {
      await sendData(dbtype, data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
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

async function sendData(dbtype: string, data: DataType) {
  const requestBody = {
    age: data.age,
    name: data.name,
    email: data.email,
    hobby: [data.hobbh1, data.hobbh2, data.hobbh3],
  };

  let url: any;

  switch (dbtype) {
    case 'mongo':
      url = `/api/db/mongo`;
      break;
    case 'postgres':
      break;
    case 'mysql':
      break;
    default:
      throw new Error(`Unknown type of DB: ${dbtype}`);
  }

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  });

  if (!res.ok) {
    throw new Error(`Failed to send data to ${dbtype}`);
  }

  return res.json();
}
