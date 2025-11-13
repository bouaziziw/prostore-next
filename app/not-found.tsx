'use client';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="wrapper flex-1 flex flex-col justify-center items-center text-center">
        <Image
          src="/images/logo.svg"
          width={48}
          height={48}
          alt={`${APP_NAME} Logo`}
          priority={true}
        />
        <div className="p-6 w-1/3 rounded-lg shadow-md text-center mt-1">
          <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-destructive">
            {'Sorry, the page you are looking for does not exist.'}
          </p>
          <Button
            variant="outline"
            className="mt-4 ml-2"
            onClick={() => (window.location.href = '/')}
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
