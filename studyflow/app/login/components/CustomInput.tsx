import type { InputHTMLAttributes, ReactNode } from "react";

type CustomInputProps = {
    label: string;
    icon?: ReactNode;
    rightText?: string;
    rightHref?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function CustomInput({ label, icon, rightText, rightHref, id, name, ...inputProps }: CustomInputProps) {
    const inputId = id ?? name;

    return (
        <div>
            <div className="flex justify-between">
                <label className="formInputName" htmlFor={inputId}>
                    {label}
                </label>
                {rightText && rightHref && (
                    <a className="formInputAlternative" href={rightHref}>
                        {rightText}
                    </a>
                )}
                {rightText && !rightHref && <p className="formInputAlternative">{rightText}</p>}
            </div>
            <div className="customInput">
                {icon}
                <input id={inputId} name={name} {...inputProps} />
            </div>
        </div>
    );
}
