import React from "react";

export default function Input({
  text,
  name,
  placeholder,
  className,
  handleChange,
  value,
}) {
  return (
    <div>
      <input
        type={text}
        name={name}
        placeholder={placeholder}
        className={className || "py-3 w-full px-1 outline-none border rounded"}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
