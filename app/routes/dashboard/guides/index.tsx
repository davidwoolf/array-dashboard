import {
    Link,
    useLoaderData,
} from 'remix'

import { db } from '~/utils/db.server'

export const loader = async () => {
    const data = {
        guides: await db.guide.findMany()
    }

    return data
}

export default function Guides() {
    const data = useLoaderData()

    return (
        <div 
        className="
            flex 
            items-center
            justify-center
            h-full
            px-8
            py-16
        ">
            {data.guides.length > 0 &&
                <div
                className="
                    w-full
                ">
                    {
                        data.guides.map((guide: any) => 
                            <div
                            className="
                                border-b
                                border-black-100
                                mb-9
                                pb-8
                                flex
                                items-center
                            ">
                                <div>
                                    <h2
                                    className="
                                        font-medium
                                        text-lg
                                    ">
                                        {guide.name}
                                    </h2>

                                    <span
                                    className="
                                        opacity-70
                                        text-md
                                    ">
                                        {guide.url}
                                    </span>
                                </div>
                            </div>    
                        )
                    }

                    <Link
                    to="new"
                    prefetch="intent"
                    className="
                        appearance-none
                        bg-blue-400
                        flex
                        font-medium
                        h-10
                        items-center
                        justify-center
                        mt-4
                        text-md
                        relative
                        rounded-md
                        text-center
                        text-white
                        transition-all
                        w-32

                        hover:bg-blue-600
                    ">
                        New guide
                    </Link>
                </div>
            }

            {data.guides.length === 0 &&
                <div 
                className="
                    flex 
                    flex-col
                    items-stretch
                ">
                    
                    <p
                    className="
                        text-body
                        text-black-300
                    ">
                        You haven&rsquo;t created any guides yet
                    </p>

                    <Link
                    to="new"
                    prefetch="intent"
                    className="
                        appearance-none
                        bg-blue-400
                        flex
                        font-medium
                        h-10
                        items-center
                        justify-center
                        mt-4
                        text-md
                        relative
                        rounded-md
                        text-center
                        text-white
                        transition-all
                        w-full

                        hover:bg-blue-600
                    ">
                        Create your first guide
                    </Link>
                </div>
            }
        </div>
    )
}
