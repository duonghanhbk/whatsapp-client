'use client'

import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { BsGit, BsGoogle } from 'react-icons/bs'
import Input from '@/app/components/inputs/Input'
import Button from '@/app/components/Button'
import AuthSocialButton from './AuthSocialButton'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN'))
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === 'REGISTER') {
            // Axios call register
        }
        if (variant === 'LOGIN') {
            // NextAuth Signin
        }
    }

    const socialAction = (action: string) => {
        // NextAuth Social Sign In
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && <Input id="name" label="Name" register={register} errors={errors} />}
                    <Input id="email" label="Email" register={register} errors={errors} disabled={isLoading} />
                    <Input id="password" label="Password" register={register} errors={errors} disabled={isLoading} />
                    <Button disabled={isLoading} fullwidth type="submit">
                        {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                    </Button>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex gap-2">
                    <AuthSocialButton icon={BsGit} onClick={() => socialAction('github')} />
                    <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')} />
                </div>
                <div className="mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500">
                    <div>{variant === 'LOGIN' ? ' New to Messenger?' : 'Already have an account'}</div>
                    <div className="cursor-pointer underline" onClick={toggleVariant}>
                        {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
