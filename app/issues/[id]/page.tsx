import { IssueStatusBadge } from '@/app/components';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

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
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-[#F3ECB8] text-[#4A4A4A] rounded-lg shadow-lg">
      <Heading className="text-[#4A4A4A] mb-4">{issue.title}</Heading>
      <Flex gap="4" my="2" className="text-[#4A4A4A]">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toLocaleDateString()}</Text>
      </Flex>
      <Card className="p-4 bg-white border border-[#B590CA] rounded-lg shadow-sm">
        <ReactMarkdown className="prose text-[#4A4A4A]">{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
