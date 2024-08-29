import { FormEvent } from "react";

type Props = {
  type: string;
  value?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  isRequired?: boolean;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({
  type,
  value,
  placeholder,
  name,
  disabled,
  isRequired,
  onChange,
}) => {
  return (
    <input
      className="w-full h-10 border rounded-3xl bg-transparent shadow-md px-3 focus:outline-none focus:border-black"
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      required={isRequired}
      onChange={onChange}
    />
  );
};
