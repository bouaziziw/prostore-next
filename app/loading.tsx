import Image from 'next/image';
import Loader from '@/assets/loader.gif';

function loadingPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Image src={Loader} height={100} width={100} alt="loading..." />
    </div>
  );
}

export default loadingPage;
