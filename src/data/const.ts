// Home
export const HOME_TITLES = {
  0: 'DATABASE',
};

// Database
export const DATABASE = [
  {
    title: 'Mongo',
    date: 'Sep-2023',
    link: '/db/mongo',
  },
  {
    title: 'PostgreSQL',
    date: 'TBA',
    link: '/db/postgres',
  },
  {
    title: 'My SQL',
    date: 'TBA',
    link: '/db/mysql',
  },
];

// Database - input
export enum FieldNames {
  name = 'name',
  email = 'email',
  age = 'age',
  hobby1 = 'hobby1',
  hobby2 = 'hobby2',
  hobby3 = 'hobby3',
}

export const fieldOptions: { [key in FieldNames]: InputProps } = {
  name: {
    id: 'name',
    label: 'Name',
    placeholder: 'Name',
    validation: {
      required: 'This field is Required.',
    },
  },
  email: {
    id: 'email',
    label: 'Email',
    placeholder: 'Email',
    validation: {
      required: 'This field is Required.',
    },
  },
  age: {
    id: 'age',
    label: 'Age',
    placeholder: 'Age',
    validation: {
      required: 'This field is Required.',
    },
  },
  hobby1: {
    id: 'hobby1',
    label: '',
    placeholder: 'hobby 1',
  },
  hobby2: {
    id: 'hobby2',
    label: '',
    placeholder: 'hobby 2',
  },
  hobby3: {
    id: 'hobby3',
    label: '',
    placeholder: 'hobby 3',
  },
};

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  validation?: {
    required: string;
  };
}
