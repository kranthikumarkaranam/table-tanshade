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
					value: (row) => new Date(row.dob).toLocaleDateString(),
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
