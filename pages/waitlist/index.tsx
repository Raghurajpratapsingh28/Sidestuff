import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function WaitlistIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/waitlist/basic');
  }, [router]);

  return null;
}
