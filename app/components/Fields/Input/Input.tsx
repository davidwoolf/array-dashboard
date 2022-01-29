interface Input extends React.ComponentPropsWithoutRef<"input"> {
    label: string;
    placeholder?: string | undefined;
    description?: string | undefined;
}

export const Input = ({
    name,
    label,
    type = 'text',
    placeholder = undefined,
    description = undefined,
}: Input) => (
    <label
    className="
        block
        w-full
    ">
        <span
        className="
            font-medium
            text-md
            text-black-300
        ">
            {label}
        </span>
        
        <input
        className="
            block
            border
            border-black-200
            rounded-md
            h-9
            px-3
            mt-1.5
            text-md
            text-black-900
            w-full

            focus:ring-1
            focus:ring-black-200
            focus:outline-none
        "
        placeholder={placeholder}
        type={type}
        name={name} />

        {description && 
            <span
            className="text-sm text-black-300">{description}</span>}
    </label>
)