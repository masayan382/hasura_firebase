import { VFC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useLogout } from '../hooks/useLogout'
import { Layout } from '../components/Layout'
import {
    ChevronDoubleLeftIcon,
    // LogoutIcon,
    PencilAltIcon,
    ChevronDoubleRightIcon,
} from '@heroicons/react/solid'
import firebase from '../firebaseConfig'
import { NewsListMemo } from '../components/NewsList'
import { NewsEditMemo } from '../components/NewsEdit'
import { TaskListMemo } from '../components/TaskList'
import { TaskEditMemo } from '../components/TaskEdit'

const Tasks: VFC = () => {
    const router = useRouter()
    const { logout } = useLogout()
    const user = firebase.auth().currentUser

    return (
        <Layout title="tasks">
            <div className="flex justify-center items-center">
                <PencilAltIcon className="h-5 w-5 my-3 mr-2" />
                <p className="my-3 mb-3 text-2xl font-bold">{user?.email}</p>
            </div>
            <p className="mt-10 mb-5 text-blue-500 text-xl font-bold">
                Public News Edit
            </p>
            <div className="grid grid-cols-2 gap-40">
                <NewsListMemo />
                <NewsEditMemo />
            </div>
            <p className="mt-20 mb-5 text-blue-500 text-xl font-bold">
                Private Tasks Edit
            </p>
            <div className="grid grid-cols-2 gap-40">
                <TaskListMemo />
                <TaskEditMemo />
            </div>

            <div className="mt-20 flex justify-center items-center">
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <ChevronDoubleLeftIcon className="h-5 w-5 mx-1 text-blue-500" />
                        <span>Back to main page</span>
                    </div>
                </Link>
                <div className="mr-5 ml-5">|</div>
                <div
                    className="flex justify-center items-center cursor-pointer"
                    onClick={() => {
                        logout()
                        router.push('/')
                    }}
                >
                    <span className="mr-2 pr-10 pl-10">Log Out</span>
                    <ChevronDoubleRightIcon className="h-5 w-5 mx-1 text-blue-500" />
                </div>
            </div>
        </Layout>
    )
}

export default Tasks
