import { Button } from "@/components/ui/button"
import Image from "next/image";
import { SignedIn,SignedOut,SignInButton,SignUpButton,UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      <SignInButton>
        <Button>login</Button>
      </SignInButton>
    </div>
  );
}
