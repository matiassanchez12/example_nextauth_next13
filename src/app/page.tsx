import { LogoutButton } from "@/components/Logout";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-4">
        <h1>{session?.user?.name}</h1>

        <div className="flex gap-8">
          <Link href="/api/auth/signin" className="ring-2 ring-green-400 rounded-md p-2">
            Go to login
          </Link>

          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
