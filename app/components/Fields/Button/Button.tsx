import {ButtonInterface} from '~/config/interface/Button'

import {Button} from '~/components/Button/Button'

export const FieldButton = (props: ButtonInterface) => (
    <Button
    type="submit"
    {...props} />
)