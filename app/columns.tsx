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
import { DataTableColumnHeader } from '../components/column-header';

export const columns: ColumnDef<Users>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
				className='translate-y-[2px]'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => {
					row.toggleSelected(!!value);
				}}
				aria-label='Select row'
				className='translate-y-[2px]'
			/>
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
		cell: ({ row }) => row.getValue('id'),
	},
	{
		accessorKey: 'first_name',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='First Name'
			/>
		),
		cell: ({ row }) => row.getValue('first_name'),
	},
	{
		accessorKey: 'last_name',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Last Name'
			/>
		),
		cell: ({ row }) => row.getValue('last_name'),
	},
	{
		accessorKey: 'email',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Email'
			/>
		),
		cell: ({ row }) => row.getValue('email'),
	},
	{
		accessorKey: 'gender',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Gender'
			/>
		),
		cell: ({ row }) => row.getValue('gender'),
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
			const formatDate = (dateString: string) => {
				const options = { day: 'numeric', month: 'short', year: 'numeric' };
				return new Intl.DateTimeFormat('en-US', options as any).format(
					new Date(dateString as string)
				);
			};
			const formattedDOB = formatDate(dob as string);
			return formattedDOB;
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
								const dob = row.getValue('dob');
								const formatDate = (dateString: string) => {
									const options = {
										day: 'numeric',
										month: 'short',
										year: 'numeric',
									};
									return new Intl.DateTimeFormat(
										'en-US',
										options as any
									).format(new Date(dateString as string));
								};
								const formattedDOB = formatDate(dob as string);
								navigator.clipboard.writeText(formattedDOB);
							}}
						>
							Copy DOB
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => {
								const dob = row.getValue('dob');
								const formatDate = (dateString: string) => {
									const options = {
										day: 'numeric',
										month: 'short',
										year: 'numeric',
									};
									return new Intl.DateTimeFormat(
										'en-US',
										options as any
									).format(new Date(dateString as string));
								};
								const formattedDOB = formatDate(dob as string);
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
