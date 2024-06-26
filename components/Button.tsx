import Image from "next/image";

interface ButtonProps {
  title: string;
  type: "button" | "submit";
  variant: string;
  icon?: string;
  full?: boolean;
}
const Button = ({ title, type, variant, icon, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
