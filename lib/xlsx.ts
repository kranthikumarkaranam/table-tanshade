import xlsx, { IJsonSheet } from 'json-as-xlsx';
import { users } from '@/utils/users';

export function downloadToExcel() {
	let columns: IJsonSheet[] = [
		{
			sheet: 'Users',
			columns: [
				{ label: 'ID', value: 'id' },
				{ label: 'First Name', value: 'first_name' },
				{ label: 'Last Name', value: 'last_name' },
				{ label: 'Email', value: 'email' },
				{ label: 'Gender', value: 'gender' },
				{
					label: 'DOB',
					value: (row) => {
						if (typeof row.dob === 'string') {
							const formatDate = (dateString: string) => {
								const options = {
									day: 'numeric',
									month: 'short',
									year: 'numeric',
								};
								return new Intl.DateTimeFormat('en-US', options as any).format(
									new Date(dateString as string)
								);
							};
							const formattedDOB = formatDate(row.dob as string);
							return formattedDOB;
						} else {
							return '';
						}
					},
				},
			],
			content: users,
		},
	];

	let settings = {
		fileName: 'Users_Excel_Sheet',
	};

	xlsx(columns, settings);
}
