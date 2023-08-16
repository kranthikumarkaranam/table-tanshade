'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ChevronsUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Users } from '@/utils/users';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Users>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<div className='text-center'>
				<Checkbox
					checked={table.getIsAllPageRowsSelected()}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label='Select all'
				/>
			</div>
		),

		cell: ({ row }) => (
			<div className='text-center'>
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => {
						row.toggleSelected(!!value);
					}}
					aria-label='Select row'
				/>
			</div>
		),

		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'id',
		header: () => {
			return <div className='text-center'>ID</div>;
		},
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('id')}</div>;
		},
	},
	{
		accessorKey: 'first_name',
		header: ({ column }) => {
			return (
				<div className='text-center'>
					<Button
						variant='ghost'
						onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					>
						First Name
						<ChevronsUpDown className='ml-2 h-4 w-4' />
					</Button>
				</div>
			);
		},
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('first_name')}</div>;
		},
	},
	{
		header: ({ column }) => {
			return (
				<div className='text-center'>
					<Button
						variant='ghost'
						onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					>
						Last Name
						<ChevronsUpDown className='ml-2 h-4 w-4' />
					</Button>
				</div>
			);
		},
		accessorKey: 'last_name',
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('last_name')}</div>;
		},
	},
	{
		accessorKey: 'email',
		header: ({ column }) => {
			return (
				<div className='text-center'>
					<Button
						variant='ghost'
						onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					>
						Email
						<ChevronsUpDown className='ml-2 h-4 w-4' />
					</Button>
				</div>
			);
		},
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('email')}</div>;
		},
	},
	{
		accessorKey: 'gender',
		header: () => {
			return <div className='text-center'>Gender</div>;
		},
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('gender')}</div>;
		},
	},
	{
		header: ({ column }) => {
			return (
				<div className='text-center'>
					<Button
						variant='ghost'
						onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
					>
						DOB
						<ChevronsUpDown className='ml-2 h-4 w-4' />
					</Button>
				</div>
			);
		},
		accessorKey: 'dob',
		cell: ({ row }) => {
			const dob = row.getValue('dob');
			const formatted = new Date(dob as string).toLocaleDateString();
			return <div className='text-center'>{formatted}</div>;
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const users = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='ghost'
							className='w-8 h-8 p-0'
						>
							<span className='sr-only'>Open menu</span>
							<MoreHorizontal className='h-4 w-4' />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => {
								const fullName = `${users.first_name} ${users.last_name}`;
								navigator.clipboard.writeText(fullName.toString());
							}}
						>
							Copy FullName
						</DropdownMenuItem>
						{/* <DropdownMenuSeparator /> */}
						<DropdownMenuItem
							onClick={() => {
								navigator.clipboard.writeText(users.email.toString());
							}}
						>
							Copy Email
						</DropdownMenuItem>
						{/* <DropdownMenuSeparator /> */}
						<DropdownMenuItem
							onClick={() => {
								const dob = new Date(users.dob);
								const formattedDOB = `${dob.getDate()}/${
									dob.getMonth() + 1
								}/${dob.getFullYear()}`;
								navigator.clipboard.writeText(formattedDOB);
							}}
						>
							Copy DOB
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
		enableSorting: false,
		enableHiding: false,
	},
];
