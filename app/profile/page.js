import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default async function Protected() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();

    return (await isAuthenticated()) ?
        (<div className=" my-20">
            <div className="text-center">
                <h3 className="text-3xl font-semibold">Welcome
                    <span className="text-amber-600"> {user?.given_name} {user?.family_name}</span></h3>
                <p className="text-xl">to</p>
                <h3 className="text-4xl font-bold">miBlog</h3>
            </div>

        </div>)
        :
       (
        <div className="my-20 text-center">
            <p className=" text-2xl font-semibold italic">To access this Page. You have to login First</p>
            <Link href={'/api/auth/login'}><p className=" py-1 px-2 border border-red-400 w-fit mx-auto mt-3 rounded-lg bg-green-100">Login</p></Link>
        </div>
       )

}