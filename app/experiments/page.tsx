import StatefulForm from "./components/form";

export default function LoginPage() {
  return (
    <main className="container mx-auto flex items-center my-5">
      <h1 className="text-3xl font-semibold">
        React Canary Experimental Features
      </h1>
      <div className="mt-6">
        <StatefulForm />
      </div>
    </main>
  );
}
