
import { auth } from "@/auth"


export default async function Home() {
  const session = await auth()
  return (
    <>
    <h1>Hello world</h1>
  

    </>
  )
}
