import prisma from '@/prisma/client';
import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import IssueActions from './IssueActions';
import IssueDetails from './IssueDetails';
import { auth } from '@/auth';
import Link from 'next/link';

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Props) => {
  const session = await auth()

  try {
    const { id } = await params;
    if (!id || isNaN(parseInt(id, 10))) {
      throw new Error('Invalid issue ID');
    }

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!issue) {
      notFound();
    }

    return (
      <div className="space-y-8 p-8 bg-gradient-to-b from-[#A8D3DA] to-[#F3ECB8] rounded-2xl shadow-xl border border-gray-300">
        <Grid
          columns={{ initial: '1', md: '5' }}
          gap="6"
        >
          <Box className="p-6 border-r  border-[#B590CA] md:col-span-4 max-lg:border-none  ">
            <IssueDetails issue={issue} />
          </Box>
          <Box className="p-6 ">
            {session?.user ?
              (<IssueActions issue={issue} />)
              : (<Flex direction="column" gap="3">
                <Link
                  href={'/api/auth/signin'}
                  className="text-[#4A4A4A] hover:text-white transition-colors duration-300 px-5 py-2 bg-[#B590CA] hover:bg-[#4A4A4A] rounded-lg shadow-md">
                  Sign In
                </Link> 
                <Text>
                Please sign in to take action on this issue.
                </Text>
              </Flex>)
            }
          </Box>
        </Grid>
      </div>
    );
  } catch (error) {
    console.error('Error loading issue:', error);
    notFound();
  }
};

export default EditIssuePage;