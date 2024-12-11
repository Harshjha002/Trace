import prisma from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import IssueActions from './IssueActions';
import IssueDetails from './IssueDetails';

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Props) => {
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
      <div className="min-h-screen bg-cream text-[#1A1A19] flex items-center justify-center">
        <Grid
          columns={{ initial: '1', sm: '5' }}
          gap="6"
          className="w-full max-w-5xl p-8 rounded-lg shadow-2xl bg-lavender text-[#1A1A19]"
        >
          <Box className="p-6 border-r border-gray-300 md:col-span-4">
            <IssueDetails issue={issue} />
          </Box>
          <Box className="p-6">
            <IssueActions issueId={issue.id} />
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