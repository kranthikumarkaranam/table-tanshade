import React from 'react';
import DataTable from './data-table';
import { columns } from './columns';
import { users } from '@/utils/users';

type Props = {};

const Users = (props: Props) => {
	return (
		<div className='container py-10 mx-auto'>
			<DataTable
				columns={columns}
				data={users}
			/>
		</div>
	);
};

export default Users;
