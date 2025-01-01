import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
        <div className="grid h-screen items-center place-content-center">
            <div className="rounded shadow-md shadow-slate-500">
                <h1 className="m-4 text-2xl font-semibold text-center">login</h1>
                <form className="grid grid-cols-2 gap-4 p-4 ">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" placeholder="enter email" className="border p-1"/>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" placeholder="enter password" className="border p-1"/>
                    <button className="bg-black col-span-2 hover:bg-gray-800 text-white p-2 rounded">login</button>
                </form>
                <p className="text-center">dont have an account? <Link className="text-sky-600" to={`/register`}>register</Link> </p>
            </div>
        </div>
        </>
    )
}