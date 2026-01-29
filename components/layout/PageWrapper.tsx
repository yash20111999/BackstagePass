export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--bg-page)]">
      <div className="mx-auto">
        {children}
      </div>
    </div>
  );
}
