import DottedSeparator from "@/components/dotted-separator"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

function SignInCard() {
  return (
    <>
      <Card className="w-full h-full md:w-[487px] border-none shadow-none">
        <CardHeader className="flex justify-center items-center p-7">
          <CardTitle className="text-2xl">Welcome back!</CardTitle>
        </CardHeader>
        <div className="px-7 mb-2">
          <DottedSeparator />
        </div>
      </Card>
    </>
  )
}

export default SignInCard
