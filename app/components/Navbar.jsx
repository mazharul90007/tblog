import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";


const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user)
    return (
        <nav className="p-2 bg-amber-200">
            <div className="flex justify-between items-center container mx-auto">
                <Link href={'/'}>
                    <h2 className="text-2xl font-semibold">miBlog</h2>
                </Link>
                <ul className="flex font-medium gap-4">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/profile'>Profile</Link></li>
                    {
                        user ? <>
                            <li><Link href={'/api/auth/logout'}>LogOut</Link></li>

                        </>
                            :
                            <>
                                <li><Link href={'/api/auth/login'}>LogIn</Link></li>
                                <li><Link href={'/api/auth/register'}>Register</Link></li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;