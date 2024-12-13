import { auth, signOut } from '@/auth';
import Link from 'next/link';
import React from 'react';
import { FaBug } from "react-icons/fa6";
import NavStaticItems from './NavStaticItems';
import { Avatar, Box, Button, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';

const Navbar = () => {
  return (
    <nav className="flex items-center  justify-between h-16 py-4 border-b-2 border-[#B590CA] bg-gradient-to-b from-[#A8D3DA] to-[#F3ECB8] px-6 shadow-lg">
      <Container >
        <Flex gap="5" align="center" justify="between">
          <Box className="flex items-center gap-3 justify-between">
            <Flex gap="5" align="center">
              <Link href="/" className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#B590CA] transition-colors duration-300">
                <FaBug size={28} className="text-[#4A4A4A] hover:text-[#B590CA] transition-colors duration-300" />
                <h1 className="font-extrabold text-[24px] tracking-wide">Trace</h1>
              </Link>
              <NavStaticItems />
            </Flex>
          </Box>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>

  );
};
export default Navbar;

//Auth status components

const AuthStatus = async () => {
  const session = await auth();
  function getFirstLetter(str: string): string {
    const firstWord = str.trim().split(' ')[0];
    return firstWord.charAt(0).toUpperCase();
  }

  return <Box>
    {session && session.user ? (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className='cursor-pointer'>
            <Avatar src={session?.user?.image!} fallback={getFirstLetter(session.user?.name!)} size='2' radius='full' referrerPolicy='no-referrer' />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Flex direction="column">
              <Text size="2">
                {session.user.name}
              </Text>
              <Text size="2">
                {session.user.email}
              </Text>
            </Flex>
          </DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <form
              action={async () => {
                "use server"
                await signOut({ redirectTo: '/' })
              }}>
              <Button type='submit' className='h-full w-9'><p className='px-14'>Log out</p></Button>
            </form>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    ) : (
        <Link
          href={'/api/auth/signin'}
          className="text-[#4A4A4A] hover:text-white transition-colors duration-300 px-5 py-2 bg-[#B590CA] hover:bg-[#4A4A4A] rounded-lg shadow-md">
          Sign In
        </Link>
    )}
  </Box>
}