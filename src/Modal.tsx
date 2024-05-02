import { useForm, useFieldArray } from "react-hook-form";

function Modal() {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      request: [{ reason: "", remark: "" }],
      action: "",
    },
  });
  const { fields, append, prepend, remove } = useFieldArray({
    name: "request",
    control,
    rules: { required: "Please append at least on item" },
  });

  const registerOption = {
    reason: { required: "reason is required" },
    remark: { required: "remark is required" },
  };

  console.log("<>>", errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("Submit data", data);
        })}
      >
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <label>Reason</label>
              <select
                {...register(`request.${index}.reason`, registerOption.reason)}
              >
                <option value="" disabled>
                  Select Option
                </option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
              </select>
              {errors &&
                errors?.request &&
                errors?.request[index]?.reason?.message}
              <label>Remark</label>
              <input
                {...register(`request.${index}.remark`, registerOption.remark)}
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </section>
          );
        })}
        <input {...register(`action`, { required: true })} />
        <button
          type="button"
          onClick={() => {
            prepend({
              reason: "",
              remark: "",
            });
          }}
        >
          Prepend
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Modal;
