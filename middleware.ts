import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth'

export async function middleware(request: NextRequest) {
    const session = await auth()

    if (!session?.user) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }

}


export const config = {
    matcher: ['/issues/create-issue', '/issues/edit/:id+']
}