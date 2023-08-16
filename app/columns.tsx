'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

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
import { DataTableColumnHeader } from './column-header';

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
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='ID'
			/>
		),
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('id')}</div>;
		},
	},
	{
		accessorKey: 'first_name',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='First Name'
			/>
		),
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('first_name')}</div>;
		},
	},
	{
		accessorKey: 'last_name',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Last Name'
			/>
		),
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('last_name')}</div>;
		},
	},
	{
		accessorKey: 'email',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Email'
			/>
		),
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('email')}</div>;
		},
	},
	{
		accessorKey: 'gender',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Gender'
			/>
		),
		cell: ({ row }) => {
			return <div className='text-center'>{row.getValue('gender')}</div>;
		},
	},
	{
		accessorKey: 'dob',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='DOB'
			/>
		),
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
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => {
								const fullName = `${users.first_name} ${users.last_name}`;
								navigator.clipboard.writeText(fullName.toString());
							}}
						>
							Copy Full Name
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => {
								navigator.clipboard.writeText(users.email.toString());
							}}
						>
							Copy Email
						</DropdownMenuItem>
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
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => {
								const dob = new Date(users.dob);
								const formattedDOB = `${dob.getDate()}/${
									dob.getMonth() + 1
								}/${dob.getFullYear()}`;
								const fullName = `${users.first_name} ${users.last_name}`;
								const email = users.email.toString();
								const gender = users.gender.toString();
								const user = `Name: ${fullName}\nEmail: ${email}\nGender: ${gender}\nDOB: ${formattedDOB}`;
								navigator.clipboard.writeText(user);
							}}
						>
							Copy User
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
		enableSorting: false,
		enableHiding: false,
	},
];
