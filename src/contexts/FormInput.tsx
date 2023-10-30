import { useFormContext, RegisterOptions } from 'react-hook-form';

export type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<'input'>;

export default function FormInput({
  id,
  label,
  placeholder = '',
  type = 'text',
  readOnly = false,
  validation,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <div className="flexRowGap1">
        {label ? <label htmlFor={id}> {label}</label> : null}{' '}
        {Object.keys(errors).map((fieldName) => {
          if (fieldName === id) {
            return (
              <p key={fieldName} role="alert" className="warning">
                {String(errors[fieldName]?.message)}
              </p>
            );
          }
        })}
      </div>
      <input
        {...register(id, validation)}
        {...rest}
        type={type}
        name={id}
        id={id}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </div>
  );
}
