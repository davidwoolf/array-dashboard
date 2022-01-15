import {
	Outlet,
} from 'remix'

export default function Login() {
    return (
        <main
        className="
            grid
            grid-cols-[180px_1fr]
            min-h-screen
        ">
            <div
            className="
                bg-black-900
            "></div>

            <div
            className="
                p-16
                py-14
            ">
                <Outlet />
            </div>
        </main>
    )
}
