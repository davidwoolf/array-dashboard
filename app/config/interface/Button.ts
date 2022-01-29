export interface ButtonInterface extends React.ComponentPropsWithoutRef<"button"> {
    className? : string,
    icon?: any,
    label: string;
    size?: 'normal' | 'small',
    variant?: 'normal' | 'simple' | 'highlight',
}