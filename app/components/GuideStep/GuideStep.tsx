interface GuideStep {
    step: string;
    title: string;
    description: string;
}

export const GuideStep = ({
    step,
    title,
    description,
}: GuideStep) => (
    <div>
        <h2
        className="
            font-semibold
            text-lg
        ">
            Step {step}:&nbsp;
            
            <em
            className="
                
                not-italic
                relative

                after:absolute
                after:border-b
                after:border-blue-400
                after:-bottom-1
                after:left-0
                after:w-full
            ">
                {title}
            </em>
        </h2>

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
    </div>
)