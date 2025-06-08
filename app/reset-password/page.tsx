type ResetPasswordPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const token = searchParams?.token;

  if (!token || Array.isArray(token)) {
    return <p>Missing or invalid token.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Reset Your Password</h1>
      <p>Token: {token}</p>
      {/* Password reset form goes here */}
    </div>
  );
}
