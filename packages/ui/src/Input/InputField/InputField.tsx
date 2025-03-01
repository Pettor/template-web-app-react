import { forwardRef, type DetailedHTMLProps, type InputHTMLAttributes, type ReactNode } from "react";

export interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: string;
  icon?: ReactNode;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ error, icon, ...inputProps }: InputFieldProps, ref) => {
    return (
      <label className="form-control w-full">
        <div className="input input-bordered flex items-center gap-2">
          {icon}
          <input ref={ref} {...inputProps} className="grow" />
        </div>
        <div className="label">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      </label>
    );
  }
);
InputField.displayName = "InputField";
