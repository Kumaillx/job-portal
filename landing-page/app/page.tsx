import { headers } from 'next/headers';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome to the Job Portal</h1>
    </>
    
  );
}
