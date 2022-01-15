export default function Guides() {
    return (
        <div 
        className="
            flex 
            items-center
            justify-center
            h-full
        ">
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
                    You haven’t created any guides yet
                </p>

                <button
                className="
                    appearance-none
                    bg-blue-400
                    font-medium
                    h-10
                    mt-4
                    text-md
                    relative
                    rounded-md
                    text-white
                    transition-all
                    w-full

                    hover:bg-blue-600
                ">
                    Create your first guide
                </button>
            </div>
        </div>
    )
}
