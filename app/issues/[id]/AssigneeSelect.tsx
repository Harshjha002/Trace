"use client"
import { User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Skeleton from '@/app/components/Skeleton'

const AssigneeSelect = () => {
    const {data:users,error,isLoading } = useQuery<User[]>({
        queryKey:['users'],
        queryFn:() => axios.get('/api/users').then(res => res.data),
        staleTime:60 * 1000,
        retry:3
    })

    if(error) return null;
    if(isLoading) return <Skeleton/>

    return (
        <Select.Root>
            <Select.Trigger placeholder='Assign' />
            <Select.Content>
                <Select.Group>
                    <Select.Label>Suggestion</Select.Label>
                    {users?.map(user =>
                        <Select.Item value={user.id} key={user.id}>{user.name}</Select.Item>
                    )}
                </Select.Group>
            </Select.Content>
        </Select.Root>
    )
}

export default AssigneeSelect