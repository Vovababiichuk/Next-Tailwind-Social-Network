'use server'

import { headers } from 'next/headers'

export const getServerPathname = () => {
	const headersList = headers()
	const headersUrl = headersList.get('referer')
	const currentPathname = '/' + headersUrl?.split('/').slice(3).join('/')

	return currentPathname
}