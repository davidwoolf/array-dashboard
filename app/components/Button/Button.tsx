interface Button extends React.ComponentPropsWithoutRef<"button"> {
    className? : string,
    icon?: any,
    label: string;
    size?: 'normal' | 'small',
    variant?: 'normal' | 'simple' | 'highlight',
}
export const Button = (props: Button) => {
    const {
        className = '',
        icon = undefined,
        label,
        type = 'button',
        size = 'normal',
        variant = 'normal',
        ...otherProps
    } = props
    
    return(
        <button
        className={`
            appearance-none
            flex
            items-center
            justify-center
            relative
            text-center
            transition-all
            
            ${size === 'small' ? 'text-sm' : 'text-md'}
            ${variant === 'normal' ? 'bg-blue-400 font-medium h-9 rounded-md text-white hover:bg-blue-600' : ''}
            ${variant === 'simple' ? 'text-black-300 hover:text-black' : ''}
            ${variant === 'highlight' ? 'text-blue-400 hover:text-blue-600' : ''}

            ${className}
        `}
        type={type}
        {...otherProps}>
            {icon && 
                <div 
                className="mr-2">
                    {icon}
                </div> 
            }
            {label}
        </button>
    )
}