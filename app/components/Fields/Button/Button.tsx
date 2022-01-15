import {Button} from '~/components/Button/Button'

export const FieldButton = ({
    className,
    label,
}: {className?: string, label: string}) => (
    <Button
    className={className}
    type="submit"
    label={label} />
)