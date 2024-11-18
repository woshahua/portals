import { Suspense } from 'react';

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspendComponent />
      </Suspense>
    </div>
  );
};

const SuspendComponent = async () => {
  return <div>SuspendComponent</div>;
};

export default Page;
