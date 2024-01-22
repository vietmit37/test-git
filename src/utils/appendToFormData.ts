export const appendToFormData = (
  formData: FormData,
  key: string,
  value: any,
  transformFn?: (value: any) => any,
) => {
  if (value) {
    formData.append(key, transformFn ? transformFn(value) : value);
  }
};
