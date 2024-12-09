import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation';
import IssueForm from '../../_components/IssueForm';



interface Props {
  params: Promise<{ id: string }>;
}
const EditIssuePage =  async ({ params }: Props) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id, 10) },
  });

  if (!issue) notFound();
  return (
    <IssueForm issue={issue} />
  )
}

export default EditIssuePage
