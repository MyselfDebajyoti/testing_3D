import Robot from "@/app/components/Robot";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <Robot></Robot>
    </div>
  );
}
