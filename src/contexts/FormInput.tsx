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
      {label ? <label htmlFor={id}> {label}</label> : null}
      <input
        {...register(id, validation)}
        {...rest}
        type={type}
        name={id}
        id={id}
        readOnly={readOnly}
        placeholder={placeholder}
      />
      {errors && (
        <p role="alert" className="warning">
          {String(errors.root?.message)}
        </p>
      )}
    </div>
  );
}
