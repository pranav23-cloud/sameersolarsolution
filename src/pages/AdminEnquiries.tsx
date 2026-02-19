import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { auth, listContactEnquiries, ContactEnquiry } from "@/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";

type EnquiryWithId = ContactEnquiry & { id: string };

const AdminEnquiries = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
    });
    return () => unsub();
  }, []);

  const { data, isLoading, isError, refetch, isFetching } = useQuery<EnquiryWithId[]>({
    queryKey: ["admin-enquiries"],
    queryFn: async () => {
      const result = await listContactEnquiries();
      return result;
    },
    enabled: !!user,
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoggingIn(true);
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setPassword("");
    } catch (err) {
      console.error("Login failed", err);
      alert("Login failed. Please check email/password.");
    } finally {
      setLoggingIn(false);
    }
  };

  if (!authReady) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-md">
            <p className="text-sm text-muted-foreground">Loading...</p>
          </div>
        </section>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Sign in with your Firebase admin email and password to view contact enquiries.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-70"
                disabled={loggingIn}
              >
                {loggingIn ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Contact Enquiries</h1>
              <p className="text-sm text-muted-foreground">
                Latest form submissions from the website contact page.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => refetch()}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted disabled:opacity-60"
                disabled={isFetching}
              >
                {isFetching ? "Refreshing..." : "Refresh"}
              </button>
              <button
                type="button"
                onClick={() => signOut(auth)}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted"
              >
                Logout
              </button>
            </div>
          </div>

          {isLoading && <p className="text-sm text-muted-foreground">Loading enquiries...</p>}
          {isError && (
            <p className="text-sm text-destructive">
              Failed to load enquiries. Please try again later.
            </p>
          )}

          {!isLoading && !isError && (!data || data.length === 0) && (
            <p className="text-sm text-muted-foreground">No enquiries found yet.</p>
          )}

          {!isLoading && !isError && data && data.length > 0 && (
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="min-w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium">Name</th>
                    <th className="px-3 py-2 text-left font-medium">Phone</th>
                    <th className="px-3 py-2 text-left font-medium">Email</th>
                    <th className="px-3 py-2 text-left font-medium">Message</th>
                    <th className="px-3 py-2 text-left font-medium whitespace-nowrap">Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((enquiry) => (
                    <tr key={enquiry.id} className="border-t border-border align-top">
                      <td className="px-3 py-2 font-medium">{enquiry.name}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{enquiry.phone}</td>
                      <td className="px-3 py-2 break-all">{enquiry.email || "—"}</td>
                      <td className="px-3 py-2 max-w-xs whitespace-pre-wrap">{enquiry.message || "—"}</td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        {new Date(enquiry.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminEnquiries;

