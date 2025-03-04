import { forwardRef, type DetailedHTMLProps, type InputHTMLAttributes, type ReactNode } from "react";

export interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ error, icon, ...inputProps }: InputFieldProps, ref) => {
    return (
      <div className="fieldset">
        <label className="input w-full">
          {icon}
          <input ref={ref} {...inputProps} className="grow" />
        </label>
        <p className="fieldset-label text-error">{error}</p>
      </div>
    );
  }
);
InputField.displayName = "InputField";
