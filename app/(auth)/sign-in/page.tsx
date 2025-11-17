import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import CredentialsSignInForm from './credentials-signin-form';

export const metadata: Metadata = {
  title: `Sign In | ${APP_NAME}`,
};

const SignInPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      <Card className='p-6 mt-20'>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex-center'>
            <Image
              src={'/images/logo.svg'}
              alt={`${APP_NAME} | Logo`}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
        </CardHeader>
        <CardTitle className='text-center'>Sign In</CardTitle>
        <CardDescription className='text-center'>
          Sign in to your account to continue to {APP_NAME}.
        </CardDescription>
        <CardContent className='space-y-4'>
          {/* Sign-in form will go here */}
          <CredentialsSignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
