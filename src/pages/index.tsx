// src/pages/index.tsx
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>GitHub 로그인</h1>

      {session ? (
        <>
          <p>{session.user?.name} 님 환영합니다!</p>
          <p>{session.user?.email}</p>
          <img src={session.user?.image || ''} alt="프로필" width={80} style={{ borderRadius: '50%' }} />
          <br />
          <button onClick={() => signOut()}>로그아웃</button>
        </>
      ) : (
        <button onClick={() => signIn('github')}>GitHub로 로그인</button>
      )}
    </main>
  );
}
