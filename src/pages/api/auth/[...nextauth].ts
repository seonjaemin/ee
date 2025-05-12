// src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!, // ! 를 붙이는 이유 : TypeScript에게 undefined가 아님을 알려줌
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // 세션을 지속 쿠키로 저장
  session: {
    strategy: 'jwt',
    maxAge: 30 * 60, // 30분 (단위: 초)
    updateAge: 5 * 60,   // 사용자가 활동하면 5분 간격으로 세션 갱신
  },

  // 선택적으로 JWT 설정도 명시 가능
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
});


