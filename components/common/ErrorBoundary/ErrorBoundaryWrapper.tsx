'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { type ReactNode } from 'react';

function fallbackRender({ error }: { error: Error }) {
  return (
    <div role='alert' className='flex h-52 flex-col items-center justify-center gap-4 bg-primary px-4 text-center'>
      <h1 className='text-4xl font-bold text-white'>Oops! Something went wrong.</h1>
      <p className='max-w-md text-lg text-white/90'>
        {error?.message || 'An unexpected error occurred. Please try again later.'}
      </p>
    </div>
  );
}

const ErrorBoundaryWrapper = ({ children }: { children: ReactNode }) => {
  return <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper;
