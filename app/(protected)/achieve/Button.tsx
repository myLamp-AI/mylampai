"use client"
import { toast } from "sonner";

interface ButtonProps {
  children: React.ReactNode;
}

const HandleInterviewClick = () => {
    toast.success("This feature coming soon!");
  };
  

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      onClick={HandleInterviewClick}
      className="bg-white py-2 md:py-5 px-3 w-1/2 font-semibold text-primary md:text-xl rounded-lg border-2 border-primary text-center max-h-[60px] items-center flex justify-center hover:bg-primary hover:text-white transition"
    >
      {children}
    </button>
  );
};

export default Button;