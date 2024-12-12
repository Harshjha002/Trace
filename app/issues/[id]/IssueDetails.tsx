
import { IssueStatusBadge } from '@/app/components'
import { Issue } from '@prisma/client'
import { Heading, Flex, Card,Text, Box } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetails = ({issue} : {issue : Issue}) => {
  return (
    <>
    <Box className='border-b-2 mb-4 pb-2'>
    <Heading className="text-[#4A4A4A] mb-4">{issue.title}</Heading>
      <Flex gap="4" my="2" className="text-[#4A4A4A]">
        <IssueStatusBadge status={issue.status} />
        <Text size="2" className='bg-blue-300 content-center p-1'>{issue.createdAt.toLocaleDateString()}</Text>
      </Flex>
    </Box>
      <Card className="p-4 border border-[#B590CA] rounded-lg shadow-sm max-w-full">
        <ReactMarkdown className="prose text-[#4A4A4A]">{issue.description}</ReactMarkdown>
      </Card>
    </>
  )
}

export default IssueDetails
