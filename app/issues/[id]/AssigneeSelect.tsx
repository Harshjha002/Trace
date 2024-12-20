"use client"
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Skeleton from '@/app/components/Skeleton'
import toast, { Toaster } from "react-hot-toast"

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
    const { data: users, error, isLoading } = useUsers()

    if (error) return null;
    if (isLoading) return <Skeleton />

    const assignIssue = (userId: String) => {
        axios
            .patch(`/api/issues/${issue.id}`, {
                assignedToUserId: userId === "Unassigned" ? null : userId,
            }
            ).then(() => {
                toast.success(`Issue ${userId === "Unassigned" ? 'unassigned' : "Assigned"} Sucsessfully `)
            }).catch(() => {
                toast.error("Changes could not be saved")
            })
    }
    return (
        <>
            <Select.Root
                defaultValue={issue.assignedToUserId || "Unassigned"}
                onValueChange={assignIssue}
            >
                <Select.Trigger placeholder='Assign...' />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Suggestion</Select.Label>
                        <Select.Item value='Unassigned'>
                            Unassigned
                        </Select.Item>
                        {users?.map(user =>
                            <Select.Item value={user.id} key={user.id}>{user.name}</Select.Item>
                        )}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <Toaster />
        </>
    )
};
const useUsers = () =>  useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data),
    staleTime: 60 * 1000,
    retry: 3
})

export default AssigneeSelect

