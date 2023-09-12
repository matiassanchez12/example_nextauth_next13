import { LogoutButton } from "@/components/Logout";
import { SigninButton } from "@/components/Signin";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-8">
        <Link href="/api/auth/signin">Go to login</Link>

        <SigninButton />
        <h1>{session?.user?.name}</h1>
        <LogoutButton />
      </div>
    </main>
  );
}
