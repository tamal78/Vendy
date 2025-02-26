import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AuthButton from "@/components/AuthButton";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      <AuthButton />
    </div>
  );
}
