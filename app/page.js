import AuthButton from "@/components/AuthButton";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>Please sign in to access your dashboard.</p>
      <AuthButton />
    </div>
  );
}
