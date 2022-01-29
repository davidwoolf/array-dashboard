import {
	Form,
    useActionData,
    useTransition,
} from 'remix'

import { db } from '~/utils/db.server'

import {GuideStep} from '~/components/GuideStep/GuideStep'
import {Button} from '~/components/Button/Button'
import Fields from '~/components/Fields'


const createGuide = async (values: any) => {

	const guide = await db.guide.create({
		data: {
			name: values.site_name,
			url: values.site_url,
		}
	})

    return {
		site_name: guide.name,
		site_url: guide.url,
        guide_id: guide.id,
    }
}

const testConnection = async (values: any) => {
    return {
        ...values,
        guide_id: 1,
    }
}

const configureAudio = async (values: any) => {
    return {
        ...values,
        guide_id: 1,
    }
}


export async function action({ request }: any) {
	const formData = await request.formData();
	const {_action, ...values} = Object.fromEntries(formData)

	if(_action === 'configure_guide') {
		const configuration = await createGuide(values)

        return {
            ...configuration,
            step: 2,
        }
    }

    if(_action === 'test_connection') {
        // test connection
        return {
            ...testConnection(values),
            step: 3,
        }
    }

    if(_action === 'finish_setup') {
        // finish_setup
        return {
            ...configureAudio(values),
        }
    }

    if(_action === 'review_previous_step') {
        return {
            ...values,
            step: Number(values.step_to_review)
        }
    }
    // const name = body.get('site_name');
    // const url = body.get('site_url');
    
    return values
}

export default function NewGuide() {
    const data = useActionData()
    const transition = useTransition()

    console.log(data, transition)
    
    return (
        <div 
        className="
            flex 
            flex-col
            justify-center
            pl-8
            py-16
            h-full
        ">
            <Form
            method="post">
                <GuideStep
                step="one"
                title="configure your guide"
                description="To get started, we need to fill out some information and connect to your website:"
                previous={data && data.step > 1 ? 1 : undefined} />
            
                <div 
                className={`
                    max-w-md
                    space-y-3
                    pt-8
                    w-full

                    ${data && data.step !== 1 ? 'hidden' : ''}
                `}>
                    {data && data.guide_id && 
                        <input 
                        type="hidden"
                        name="guide_id"
                        value={data.guide_id} />
                    }
                    <Fields.Input
                    label="Site name"
                    name="site_name"
                    value={data ? data.site_name : ''} />
                    
                    <Fields.Input
                    name="site_url"
                    label="URL"
                    placeholder="https://"
                    description="include the subdomain if there is one (ex: portal.example.com vs example.com)"
                    value={data ? data.site_url : ''} />

                    <div className="pt-2">
                        <Fields.Button
                        className="w-full"
                        name="_action"
                        value="configure_guide"
                        label={transition.state === 'submitting' ? 'Creating guide...' : 'Next'} />
                    </div>
                </div>

                <div 
                className={`
                    border-t
                    border-black-100
                    mt-9
                    pt-8

                    ${data && data.step >= 2 ? '' : 'hidden'}
                `}>
                    <GuideStep
                    step="two"
                    title="connect your site"
                    description="To record and test interactions, add the following script to the footer of each page:"
                    previous={data && data.step > 2 ? 2 : undefined} />

                    <div 
                    className={`
                        max-w-lg
                        space-y-3
                        pt-8
                        w-full
                        
                        ${data && data.step === 2 ? '' : 'hidden'}
                    `}>
                        <div 
                        className="
                            bg-blue-400 
                            bg-opacity-[.04]
                            px-6
                            py-4
                            rounded-lg
                        ">
                            <header
                            className="
                                flex
                                items-center
                                justify-between
                            ">
                                <label
                                className="
                                    font-medium
                                    opacity-60
                                    text-black-900
                                    text-sm
                                ">
                                    Embed script
                                </label>

                                <Button 
                                icon={
                                    <svg
                                    className="text-blue-400"
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14">
                                        <path 
                                        d="M4.44922 12.8281C4.75977 12.8281 4.9707 12.7227 5.3457 12.3945L7.30859 10.6309C7.73047 11.0938 8.36914 11.3457 9.18359 11.3457H11.2051L13.1621 13.0215C13.5195 13.3262 13.7129 13.4844 13.9941 13.4844C14.3984 13.4844 14.627 13.1973 14.627 12.752V11.3457H14.873C16.3438 11.3457 17.3223 10.4551 17.3223 8.92578V5.46289C17.3223 3.92773 16.3438 3.03711 14.873 3.03711H13.9531V2.5918C13.9531 1.00391 13.0098 0.078125 11.416 0.078125H3.03125C1.50195 0.078125 0.494141 1.00391 0.494141 2.5918V7.98828C0.494141 9.58203 1.50195 10.502 3.03125 10.502H3.80469V12.1074C3.80469 12.5586 4.0332 12.8281 4.44922 12.8281ZM4.68945 10.1094C4.68945 9.77539 4.49023 9.62305 4.23242 9.62305H3.08984C2.05273 9.62305 1.4375 9.05469 1.4375 7.96484V2.62695C1.4375 1.53711 2.05273 0.962891 3.08984 0.962891H11.3574C12.3945 0.962891 13.0098 1.53711 13.0098 2.62695V3.03711H9.18359C7.64844 3.03711 6.74023 3.92773 6.74023 5.46289V8.92578C6.74023 9.24219 6.77539 9.5293 6.85156 9.78711L4.68945 11.7852V10.1094ZM13.748 12.4238L11.8672 10.7363C11.6328 10.5312 11.4922 10.4609 11.1699 10.4609H9.24219C8.26367 10.4609 7.67773 9.93359 7.67773 8.89648L7.68359 5.49219C7.68359 4.46094 8.26367 3.92188 9.24219 3.92188H14.8203C15.793 3.92188 16.3789 4.46094 16.3789 5.49219V8.89648C16.3789 9.93359 15.793 10.4609 14.8203 10.4609H14.1992C13.9473 10.4609 13.748 10.6133 13.748 10.9414V12.4238Z" 
                                        className="fill-blue-400"/>
                                    </svg>
                                } 
                                label="Support"
                                size="small"
                                variant="highlight" />
                            </header>

                            <code
                            className="
                                block
                                font-mono
                                font-medium
                                leading-normal
                                pt-4
                                text-md
                                text-black-900
                                whitespace-pre-line
                            ">
                            {`<script 
                            type=”text/javascript” 
                            src=”https://connect.usearray.com/api/45xd897g” 
                            preconnect></script>`}
                            </code>
                            
                        </div>

                        <Fields.Button
                        className="w-full"
                        label="Test connection"
                        name="_action"
                        value="test_connection" />
                    </div>
                </div>

                <div 
                className={`
                    border-t
                    border-black-100
                    mt-9
                    pt-8

                    ${data && data.step === 3 ? '' : 'hidden'}
                `}>
                    <GuideStep
                    step="final"
                    title="audio preferences"
                    description="Record your own audio or use our text to speech feature to generate audio:" />

                    <div 
                    className="
                        max-w-md
                        space-y-3
                        pt-8
                        w-full
                    ">
                        <Fields.Select
                        label="Audio preferences">
                            <option value="manual">Record audio manually</option>
                            <option value="automatically">Generate audio from text</option>
                        </Fields.Select>

                        <Fields.Button
                        className="w-full"
                        label="Finish and go to action editor" />
                    </div>
                </div>
            </Form>
        </div>
    )
}
