import { Flex } from '@radix-ui/themes'
import React from 'react'
import EditIssueButton from './EditIssueButton'
import DeleteIssueButton from './DeleteIssueButton'
import AssigneeSelect from './AssigneeSelect'
import { Issue } from '@prisma/client'

const IssueActions = ({issue} : {issue:Issue}) => {
  return (
      <Flex direction="column" gap="4">
          <AssigneeSelect issue={issue}/>
          <EditIssueButton issueId={issue.id}/>
          <DeleteIssueButton issueId={issue.id}/>
      </Flex>
  )
}

export default IssueActions
