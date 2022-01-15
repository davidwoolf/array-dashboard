import logo from "../../images/logo-white.svg";

export default function Login() {
    return (
        <div 
        className="
            grid 
            grid-cols-[4fr_6fr]
            h-screen
        ">
            <div
            className="
                bg-black-900
                flex
                items-center
                justify-center
            ">
                <img
                src={logo} 
                alt="Array" />
            </div>

            <div 
            className="
                flex
                items-center
                justify-center
            ">
                <form 
                action="
                " 
                className="
                    max-w-sm
                    text-center
                    w-full
                ">
                    <h1
                    className="
                        font-semibold
                        text-xl
                    ">
                        Login
                    </h1>

                    <div className="pt-6"></div>

                    <label
                    className="
                        block
                        font-medium
                        relative
                        text-md
                    ">
                        <span
                        className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                        ">
                            username
                        </span>

                        <input 
                        type="text" 
                        className="
                            border-2
                            border-black-300
                            font-normal
                            h-10
                            px-3
                            pl-20
                            
                            w-full
                            rounded-md

                            focus:outline-none
                        " />
                    </label>

                    <label
                    className="
                        block
                        font-medium
                        mt-1.5
                        text-md
                        relative
                    ">
                        <span
                        className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                        ">
                            password
                        </span>

                        <input 
                        type="text" 
                        className="
                            border-2
                            border-black-300
                            font-normal
                            h-10
                            px-3
                            text-md
                            w-full
                            rounded-md

                            focus:outline-none
                        " />
                    </label>

                    <button 
                    className="
                        appearance-none
                        bg-blue-400
                        font-medium
                        h-10
                        mt-6
                        text-md
                        relative
                        rounded-md
                        text-white
                        w-full
                    ">
                        login
                    </button>

                    <a
                    href="#" 
                    className="
                        inline-flex
                        h-10
                        items-center
                        text-md
                        relative
                        rounded-md
                        text-black-600
                        underline
                    ">
                        reset password
                    </a>
                </form>
            </div>
        </div>
    )
}
