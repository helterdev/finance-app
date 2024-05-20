import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface InputsProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
}

const Inputs = ({ id, label, type, placeholder, register }: InputsProps) => {
  return (
    <>
      <label htmlFor={id} className='font-normal text-sm pl-1'>
        {label}
      </label>

      <input
        className='border-none font-normal text-normal rounded px-2 py-1 w-full outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-opacity-50 text-black'
        type={type}
        placeholder={placeholder}
        id={id}
        {...register(id)}
      />
    </>
  );
};

export default Inputs;
