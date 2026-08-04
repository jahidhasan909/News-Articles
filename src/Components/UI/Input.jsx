const Input = ({
  label,
  error,
  icon: Icon,
  type = 'text',
  className = '',
  id,
  fullWidth = true,
  maxLength,
  value,
  onChange,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`${fullWidth ? 'w-full' : ''} flex flex-col gap-1.5`}>
      {label && (
        <div className="flex justify-between items-center">
          <label htmlFor={inputId} className="text-xs font-bold text-slate-700">
            {label}
          </label>
          {maxLength && (
            <span className="text-slate-400 text-[11px] font-normal">
              {String(value || '').length}/{maxLength}
            </span>
          )}
        </div>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 pointer-events-none text-slate-400">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          style={{ backgroundColor: '#ffffff', color: '#0f172a' }}
          className={`w-full placeholder-slate-400 text-sm rounded-xl border ${
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
              : 'border-slate-200 hover:border-slate-300 focus:border-sky-500 focus:ring-sky-500/20'
          } ${Icon ? 'pl-10' : 'px-4'} py-2.5 outline-none transition-all duration-200 focus:ring-4 ${className}`}
          {...props}
        />
      </div>
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};

export default Input;
