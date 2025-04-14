import { useForm } from "@tanstack/react-form";
import { useQuery } from "@tanstack/react-query";

export default function Form1() {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { name: "name", email: "test@test.com" };
    },
  });

  const form = useForm({
    defaultValues: {
      name: data?.name || "",
      email: data?.email || "",
    },
    onSubmit: async ({ value }) => {
      alert(JSON.stringify(value, null, 2));
    },
  });

  const handleReset = () => {
    form.reset();
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Form 1</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <div>
            <label>
              Name:
              <form.Field
                name="name"
                children={(field) => (
                  <input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              />
            </label>
          </div>

          <div>
            <label>
              Email:
              <form.Field
                name="email"
                children={(field) => (
                  <input
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              />
            </label>
          </div>

          <button onClick={handleReset}>Reset</button>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <>
                <button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </>
            )}
          />
        </form>
      )}
    </div>
  );
}
