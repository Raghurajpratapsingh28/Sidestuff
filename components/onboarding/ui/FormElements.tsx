import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  sublabel?: string;
  rightElement?: React.ReactNode;
}

export const TextInput: React.FC<TextInputProps> = ({ label, sublabel, className, rightElement, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-secondry font-NeueMontreal font-medium mb-1 text-base">{label}</label>
      {sublabel && <span className="text-gray-500 font-NeueMontreal text-sm mb-1">{sublabel}</span>}
      <div className="flex w-full items-center">
        <input
          className={`flex-grow border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#102c26] focus:border-transparent font-NeueMontreal transition-colors text-base w-full ${className}`}
          {...props}
        />
        {rightElement && <div className="ml-3 flex-shrink-0">{rightElement}</div>}
      </div>
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  sublabel?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, sublabel, className, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-secondry font-NeueMontreal font-medium mb-1 text-base">{label}</label>
      {sublabel && <span className="text-gray-500 font-NeueMontreal text-sm mb-1">{sublabel}</span>}
      <textarea
        className={`border border-gray-300 rounded-md p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#102c26] focus:border-transparent font-NeueMontreal transition-colors resize-y text-base ${className}`}
        {...props}
      />
    </div>
  );
};

interface Option {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  label?: string;
  sublabel?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  className?: string; // Add className prop
}

export const RadioCardGroup: React.FC<RadioGroupProps> = ({ label, sublabel, options, value, onChange, name, className }) => {
  return (
    <div className={`flex flex-col mb-4 ${className || ""}`}>
      {label && <label className="text-secondry font-NeueMontreal font-medium mb-1 text-base">{label}</label>}
      {sublabel && <span className="text-gray-500 font-NeueMontreal text-sm mb-2">{sublabel}</span>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`cursor-pointer border rounded-lg p-4 flex flex-col transition-all duration-200 ${
              value === opt.value
                ? "border-[#102c26] bg-[#102c26] bg-opacity-5 ring-1 ring-[#102c26]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                value === opt.value ? "border-[#102c26]" : "border-gray-300"
              }`}>
                {value === opt.value && <div className="w-2.5 h-2.5 bg-[#102c26] rounded-full" />}
              </div>
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                className="hidden"
              />
              <span className={`font-NeueMontreal font-medium text-base ${value === opt.value ? "text-[#102c26]" : "text-secondry"}`}>
                {opt.label}
              </span>
            </div>
            {opt.description && (
              <span className="text-gray-500 font-NeueMontreal text-sm mt-2 ml-8 block">
                {opt.description}
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

interface CheckboxGroupProps {
  label?: string;
  sublabel?: string;
  options: Option[];
  values: string[];
  onChange: (values: string[]) => void;
  className?: string; // Add className prop
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ label, sublabel, options, values, onChange, className }) => {
  const handleToggle = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <div className={`flex flex-col mb-4 ${className || ""}`}>
      {label && <label className="text-secondry font-NeueMontreal font-medium mb-1 text-base">{label}</label>}
      {sublabel && <span className="text-gray-500 font-NeueMontreal text-sm mb-2">{sublabel}</span>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`cursor-pointer border rounded-lg p-4 flex flex-col transition-all duration-200 ${
              values.includes(opt.value)
                ? "border-[#102c26] bg-[#102c26] bg-opacity-5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 ${
                values.includes(opt.value) ? "border-[#102c26] bg-[#102c26]" : "border-gray-300"
              }`}>
                {values.includes(opt.value) && (
                  <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                value={opt.value}
                checked={values.includes(opt.value)}
                onChange={() => handleToggle(opt.value)}
                className="hidden"
              />
              <span className={`font-NeueMontreal font-medium text-base ${values.includes(opt.value) ? "text-[#102c26]" : "text-secondry"}`}>
                {opt.label}
              </span>
            </div>
            {opt.description && (
              <span className="text-gray-500 font-NeueMontreal text-sm mt-2 ml-8 block">
                {opt.description}
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};
