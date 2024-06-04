import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const BACKEND_URL = process.env.BACKEND_URL ?? "";

export function PasswordLogin() {
  return (
    <form action={BACKEND_URL + "/login/password"} method="POST">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="username"
          placeholder="email@example.com"
        />
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />
        <Button type="submit">Login with Email</Button>
      </div>
    </form>
  );
}
