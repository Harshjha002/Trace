'use client'
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const statuses: { label: string; value?: Status }[] = [
    { label: 'All' },
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Closed', value: 'CLOSED' },
  ];

  return (
    <Select.Root
      onValueChange={(status) => {
        const params = new URLSearchParams(searchParams);

        if (status && status !== 'all') {
          params.set('status', status); 
        } else {
          params.delete('status'); 
        }

        router.push(`/issues?${params.toString()}`); 
      }}
    >
      <Select.Trigger
        placeholder="Filter by Status"
        className="rounded-lg border-none"
      />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item
            value={status.value || 'all'} 
            key={status.value || 'all'}
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
