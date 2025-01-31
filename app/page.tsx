
import { Button } from "@/components/ui/button";
import { signInAction } from "@/actions/auth-actions";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center justify-between p-24">
        <h1>TodoRex</h1>

        <form action={signInAction}>
        <Button>Log in</Button>
        </form>
    </main>
  );
}
