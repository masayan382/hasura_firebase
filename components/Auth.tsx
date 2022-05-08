import { VFC } from 'react'
import Link from 'next/link'
import {
    ChevronDoubleRightIcon,
    SwitchVerticalIcon,
} from '@heroicons/react/solid'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'
import firebase from '../firebaseConfig'

export const Auth: VFC = () => {
    const user = firebase.auth().currentUser
    const {
        isLogin,
        email,
        password,
        emailChange,
        pwChange,
        authUser,
        toggleMode,
    } = useFirebaseAuth()
    return (
        <>
            <div>
                <form
                    onSubmit={authUser}
                    className="mt-8 flex justify-center items-center flex-col"
                >
                    <label>Email:</label>
                    <input
                        className="my-3 px-3 py-1 border border-gray-300"
                        placeholder="email ?"
                        type="text"
                        value={email}
                        onChange={emailChange}
                    />

                    <label>Password:</label>
                    <input
                        className="my-3 px-3 py-1 border border-gray-300"
                        placeholder="password ?"
                        type="password"
                        value={password}
                        onChange={pwChange}
                    />
                    <div className="flex justify-between w-full">
                        <div>
                            <button
                                disabled={!email || !password}
                                type="submit"
                                className="disabled:opacity-40 mt-5 py-1 px-3 text-white bg-indigo-600 border-solid border-2 border-indigo-600 hover:bg-indigo-700 rounded"
                            >
                                {isLogin ? 'Login' : 'Register'}
                            </button>
                        </div>
                        <div>
                            <button
                                className="disabled:opacity-40 mt-5 py-1 px-3 text-indigo-600 bg-white border-solid border-2 border-indigo-600 hover:bg-indigo-300 hover:text-white hover:border-indigo-300 rounded"
                                onClick={toggleMode}
                            >
                                {isLogin ? 'SignUp' : 'Login'}
                            </button>
                        </div>
                    </div>
                </form>
                {user && (
                    <Link href="/tasks">
                        <div className="flex items-center cursor-pointer my-3 mt-10">
                            <ChevronDoubleRightIcon className="h-5 w-5 mx-1 text-blue-500" />
                            <span>to tasks page</span>
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}
