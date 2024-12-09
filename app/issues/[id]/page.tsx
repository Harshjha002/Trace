import prisma from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';

interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id, 10) },
  });

  if (!issue) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3ECB8] to-[#A8D3DA] py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="bg-[#B590CA] text-white p-6">
          <h1 className="text-2xl font-bold">{issue.title}</h1>
        </header>

        {/* Main Content */}
        <div className="p-6 space-y-8">
          <Grid columns={{ initial: '1', md: '3' }} gap="6">
            {/* Issue Details Section */}
            <Box className="md:col-span-2 bg-[#F9F9F9] p-6 rounded-lg shadow-sm">
              <IssueDetails issue={issue} />
            </Box>

            {/* Actions Section */}
            <Box className="bg-[#F3F4F6] p-6 rounded-lg shadow-sm space-y-4">
              <h2 className="text-xl font-semibold text-[#4A4A4A]">Actions</h2>
              <EditIssueButton issueId={issue.id} />
            </Box>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailPage;
