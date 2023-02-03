
export interface OptionProps {
  name: string;
  value: string;
}
export interface SelectProps {
  options: OptionProps[];
  selectedOption: (value: string) => void;
}