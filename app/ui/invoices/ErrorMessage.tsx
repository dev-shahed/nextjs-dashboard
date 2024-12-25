import React from "react";

interface ErrorMessageProps {
  errors: string[];
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors, message }) => {
  return (
    <div>
      {errors.map((error, index) => (
        <p key={index} className="mt-2 text-sm text-red-500">
          {error}
        </p>
      ))}
      <div>
        {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default ErrorMessage;
