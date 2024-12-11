import { Flex } from '@radix-ui/themes'
import React from 'react'
import EditIssueButton from './EditIssueButton'
import DeleteIssueButton from './DeleteIssueButton'

const IssueActions = ({issueId} : {issueId:number}) => {
  return (
      <Flex direction="column" gap="4">
          <EditIssueButton issueId={issueId}/>
          <DeleteIssueButton issueId={issueId}/>
      </Flex>
  )
}

export default IssueActions
