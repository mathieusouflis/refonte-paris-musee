export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      {children}
    </main>
  );
}
