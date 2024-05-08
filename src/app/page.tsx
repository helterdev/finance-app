import Background from '@/components/Background/Background';
import Navbar from '@/components/Navbar/Navbar';
import Title from '@/components/Title/Title';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Background />
        <Title />
      </main>
    </>
  );
}
