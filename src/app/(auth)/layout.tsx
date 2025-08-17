import { Button } from "@/components/ui/button"
import Image from "next/image"

interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" alt="logo" width={45} height={45} />
          <Button variant="secondary">Sign Up </Button>
        </nav>
        <div className="flex flex-col items-center justify-center p">
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
