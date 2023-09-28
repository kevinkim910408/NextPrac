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
    placeholder: 'hobby3',
    validation: {
      required: 'asd',
    },
  },
  email: {
    id: 'email',
    label: 'Email',
    placeholder: 'hobby3',
    validation: {
      required: 'asd!',
    },
  },
  age: {
    id: 'age',
    label: 'Age',
    placeholder: 'hobby3',
    validation: {
      required: 'asd!',
    },
  },
  hobby1: {
    id: 'hobby1',
    label: '',
    placeholder: 'hobby3',
    validation: {
      required: 'asd!',
    },
  },
  hobby2: {
    id: 'hobby2',
    label: '',
    placeholder: 'hobby3',
    validation: {
      required: 'asd!',
    },
  },
  hobby3: {
    id: 'hobby3',
    label: '',
    placeholder: 'hobby3',
    validation: {
      required: 'asd!',
    },
  },
};

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  validation: {
    required: string;
  };
}
