
import { auth, signOut,signIn } from "@/auth"
import { Button } from "@radix-ui/themes"

export default async function Home() {
  const session = await auth()
  return (
    <>
    <h1>Hello world</h1>
    <div>
      {session && session.user ? (<>
      <form action={async () =>{ 
        'use server'
        await signOut({redirectTo:'/'})
        
        }}>
        <Button type="submit">
        Sing out
        </Button>
      </form></>) : (
        <form action={async () => {
        "use server"
        await signIn('google')
        }}>
        <Button type="submit">
          sign in
        </Button>
      </form>)}
    </div>

    </>
  )
}
