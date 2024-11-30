import { CheckCircleIcon } from "lucide-react";

interface Props {
  message?: string;
}

const FormSuccess = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircleIcon className="size-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
