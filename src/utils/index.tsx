export function transformArray<T>(
  inputArray: T[],
  labelField: keyof T,
  valueField: keyof T
): Array<{ label: string; value: any }> {
  return inputArray.map((item) => ({
    label: String(item[labelField]),
    value: item[valueField],
  }));
}
