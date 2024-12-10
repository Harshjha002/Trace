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
      <Grid columns={{ initial: '1', md: '2' }} gap="5" className="max-w-3xl mx-auto mt-8 p-6 bg-[#F3ECB8] text-[#4A4A4A] rounded-lg shadow-lg">
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <IssueActions issueId={issue.id} />
        </Box>
      </Grid>
    );
  } catch (error) {
    console.error('Error loading issue:', error);
    notFound();
  }
};

export default EditIssuePage;
