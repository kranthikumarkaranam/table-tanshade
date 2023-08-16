'use client';

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface DataTableViewOptionsProps<TData> {
	table: Table<TData>;
}

export function DataTableViewOptions<TData>({
	table,
}: DataTableViewOptionsProps<TData>) {
	const capitalizeFirstLetter = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const formatFieldName = (fieldName: string) => {
		if (fieldName === 'id') {
			return 'ID'; // Change 'id' to 'ID'
		} else if (fieldName === 'dob') {
			return 'DOB'; // Change 'dob' to 'DOB'
		}
		const words = fieldName.split('_');
		const formattedWords = words.map((word) => capitalizeFirstLetter(word));
		return formattedWords.join(' ');
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='sm'
					className='ml-auto hidden h-8 lg:flex'
				>
					<MixerHorizontalIcon className='mr-2 h-4 w-4' />
					View
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='w-[150px]'
			>
				<DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{table
					.getAllColumns()
					.filter(
						(column) =>
							typeof column.accessorFn !== 'undefined' && column.getCanHide()
					)
					.map((column) => {
						return (
							<DropdownMenuCheckboxItem
								key={column.id}
								checked={column.getIsVisible()}
								onCheckedChange={(value) => column.toggleVisibility(!!value)}
							>
								{formatFieldName(column.id)}
							</DropdownMenuCheckboxItem>
						);
					})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}