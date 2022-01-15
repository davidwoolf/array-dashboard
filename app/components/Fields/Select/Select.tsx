interface Select {
    label: string;
    children: any;
    placeholder?: string | undefined;
    description?: string | undefined;
}

export const Select = ({
    label,
    children,
    placeholder = undefined,
    description = undefined,
}: Select) => (
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
        
        <div className="relative">
            <select
            className="
                appearance-none
                block
                border
                border-black-200
                rounded-md
                h-9
                px-3
                pr-10
                mt-1.5
                text-md
                text-black-900
                w-full

                focus:ring-1
                focus:ring-black-200
                focus:outline-none
            "
            placeholder={placeholder}>
                {children}
            </select>

            <svg
            className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
            "
            width="11"
            height="7"
            viewBox="0 0 11 7">
                <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M0.292969 1.17683L1.00008 0.469727L5.64652 5.11617L10.293 0.469727L11.0001 1.17683L5.64652 6.53039L0.292969 1.17683Z" 
                fill="#151928" />
            </svg>

        </div>

        {description && 
            <span
            className="text-sm text-black-300">{description}</span>}
    </label>
)