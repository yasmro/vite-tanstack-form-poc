import { useForm } from "@tanstack/react-form";

type FormValues = {
  selectedOptions: string[]; // チェックされた項目の配列
};

const allOptions = ["Option A", "Option B", "Option C", "Option D", "Option E"];

export default function Form2() {
  // ここの型指定は要検討
  // eslint-disable-next-line
  const form = useForm<FormValues, any, any, any, any, any, any, any, any, any>(
    {
      defaultValues: {
        selectedOptions: [],
      },
      onSubmit: async ({ value }) => {
        alert(`選択された項目: ${value.selectedOptions.join(", ")}`);
      },
    }
  );

  return (
    <div style={{ padding: 24 }}>
      <h1>Form2 - Checkbox Form</h1>
      <form onSubmit={form.handleSubmit}>
        <form.Field
          name="selectedOptions"
          children={(field) => (
            <div>
              {allOptions.map((option) => {
                const checked = field.state.value.includes(option);
                return (
                  <label
                    key={option}
                    style={{ display: "block", marginBottom: 8 }}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        field.handleChange(
                          isChecked
                            ? [...field.state.value, option]
                            : field.state.value.filter((v) => v !== option)
                        );
                      }}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          )}
        />

        <button type="submit" style={{ marginTop: 16 }}>
          送信
        </button>
      </form>
    </div>
  );
}
