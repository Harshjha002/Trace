
import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Heading, Flex, Card,Text } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue} : {issue : Issue}) => {
  return (
    <>
    <Heading className="text-[#4A4A4A] mb-4">{issue.title}</Heading>
      <Flex gap="4" my="2" className="text-[#4A4A4A]">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toLocaleDateString()}</Text>
      </Flex>
      <Card className="p-4 bg-white border border-[#B590CA] rounded-lg shadow-sm">
        <ReactMarkdown className="prose text-[#4A4A4A]">{issue.description}</ReactMarkdown>
      </Card>
    </>
  )
}

export default IssueDetails
