import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { listContactEnquiries, ContactEnquiry } from "@/lib/firebase";

type EnquiryWithId = ContactEnquiry & { id: string };

const AdminEnquiries = () => {
  const [authorized, setAuthorized] = useState(false);
  const [codeInput, setCodeInput] = useState("");

  const { data, isLoading, isError, refetch, isFetching } = useQuery<EnquiryWithId[]>({
    queryKey: ["admin-enquiries"],
    queryFn: async () => {
      const result = await listContactEnquiries();
      return result;
    },
    enabled: authorized,
  });

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    if (codeInput.trim() === import.meta.env.VITE_ADMIN_ACCESS_CODE) {
      setAuthorized(true);
    } else {
      alert("Invalid access code");
    }
  };

  if (!authorized) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Admin Access</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Enter the admin access code to view contact enquiries.
            </p>
            <form onSubmit={handleAuthorize} className="space-y-4">
              <input
                type="password"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="Access code"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Continue
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
            <button
              type="button"
              onClick={() => refetch()}
              className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted disabled:opacity-60"
              disabled={isFetching}
            >
              {isFetching ? "Refreshing..." : "Refresh"}
            </button>
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

