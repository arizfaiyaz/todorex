import UserProfile from "@/components/todorex/userProfile";
import Tasks from "@/components/todorex/tasks";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center justify-between p-24">
        <h1>TodoRex</h1>
        <UserProfile />
        <Tasks />
    </main>
  );
}
