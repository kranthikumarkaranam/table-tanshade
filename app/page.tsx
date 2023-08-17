import React from 'react';
import DataTable from './data-table';
import { columns } from './columns';
import { users } from '@/utils/users';
import { UserNav } from '@/components/user-nav';
import Footer from '@/components/footer';

type Props = {};

const Users = (props: Props) => {
	return (
		<div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
			<div className='flex items-center justify-between space-y-2'>
				<div>
					<h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
					<p className='text-muted-foreground'>
						Here&apos;s a list of all users data!
					</p>
				</div>
				<div className='flex items-center space-x-2'>
					<UserNav />
				</div>
			</div>
			<DataTable
				data={users}
				columns={columns}
			/>
			<Footer />
		</div>
	);
};

export default Users;
