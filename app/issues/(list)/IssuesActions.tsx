import { Flex, Button, Text , Box } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import IssueStatusFilter from './IssueStatusFilter';

const IssuesActions = () => {
  return (
    <Flex
      align="center"
      justify="between"
      className="border-b pb-4 border-violet-300"
    >
      <Text
        as="p"
        size="6"
        weight="bold"
        className="text-violet-800 tracking-wide"
      >
        Issues
      </Text>
      <Box>
        <Flex className='items-center content-center gap-4'>
          <IssueStatusFilter/>
      <Button
        asChild
        size="3"
        className="bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white rounded-lg px-4 py-2 shadow-md"
      >
        <Link href="/issues/create-issue">New Issue</Link>
      </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default IssuesActions;
