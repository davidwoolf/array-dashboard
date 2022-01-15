import {
	Form,
} from 'remix'

import {GuideStep} from '~/components/GuideStep/GuideStep'
import Fields from '~/components/Fields'

export default function Guides() {
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
            <GuideStep
            step="one"
            title="configure your guide"
            description="To get started, we need to fill out some information and connect to your website:" />
                
            <Form>
                <div 
                className="
                    max-w-md
                    space-y-3
                    pt-8
                    w-full
                ">
                    <Fields.Input
                    label="Site name" />
                    
                    <Fields.Input
                    label="URL"
                    type="url"
                    placeholder="https://"
                    description="include the subdomain if there is one (ex: portal.example.com vs example.com)" />

                    <div className="pt-2">
                        <Fields.Button
                        className="w-full"
                        label="Next" />
                    </div>
                </div>
            </Form>

            <div 
            className="
                border-t
                border-black-100
                mt-9
                pt-8
            ">
                <GuideStep
                step="two"
                title="connect your site"
                description="To record and test interactions, add the following script to the footer of each page:" />

                <div 
                className="
                    max-w-md
                    space-y-3
                    pt-8
                    w-full
                ">
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

                        </header>
                    </div>

                    <Fields.Button
                    className="w-full"
                    label="Test connection" />
                </div>
            </div>

            <div 
            className="
                border-t
                border-black-100
                mt-9 
                pt-8
            ">
                <GuideStep
                step="final"
                title="audio preferences"
                description="Record your own audio or use our text to speech feature to generate audio:" />

                <Form>
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
                </Form>
            </div>

        </div>
    )
}
