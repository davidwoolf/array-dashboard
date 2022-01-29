import {
	Form,
} from 'remix'

import Fields from '~/components/Fields'

interface GuideStep {
    step: string;
    title: string;
    description: string;
    previous?: number | undefined;
}

export const GuideStep = ({
    step,
    title,
    description,
    previous = undefined,
}: GuideStep) => (
    <div
    className="
        flex
        items-center
        justify-between
    ">
        <div
        className={`
            ${previous !== undefined ? 'opacity-40' : ''}
        `}>
            <h2
            className="
                font-semibold
                text-lg
            ">
                Step {step}:&nbsp;
                
                <em
                className={`
                    not-italic
                    relative

                    after:absolute
                    after:border-b
                    after:border-blue-400
                    after:-bottom-1
                    after:left-0
                    after:w-full

                    ${previous !== undefined ? 'after:hidden' : ''}
                `}>
                    {title}
                </em>
            </h2>

            {previous === undefined &&
                <p
                className="
                    leading-tight
                    pt-3
                    max-w-xs
                    text-body
                    text-black-300
                ">
                    {description}
                </p>
            }
        </div>

        {previous !== undefined &&
            <>
                <input type="hidden" name="step_to_review" value={previous} />
                
                <Fields.Button
                label="review this step"
                size="small"
                variant="highlight"
                name="_action"
                value="review_previous_step">
                </Fields.Button>
            </>
        }
    </div>
)