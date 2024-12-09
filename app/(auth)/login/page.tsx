"use client";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Linkedin, CircleArrowOutUpRight } from "lucide-react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useSession } from "next-auth/react";
import { useUserStore } from "@/utils/userStore";
import { useEffect } from "react";
import { setCookie } from "@/utils/cookieUtils";
import {
  handleSendOTP,
  verifyOTPandLogin,
  nextAuthLogin,
} from "@/actions/authActions";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  pin: z
    .string()
    .min(6, {
      message: "Your one-time password must be 6 characters.",
    })
    .max(6, {
      message: "Your one-time password must be 6 characters.",
    })
    .refine((value) => /^\d+$/.test(value), {
      message: "Your one-time password must contain only numbers.",
    }),
});

export default function LoginPage() {
  const router = useRouter();
  const { data } = useSession();
  const { setUserData } = useUserStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await verifyOTPandLogin({
        email: data.email,
        otp: data.pin,
      });

      if (res.otpVerified) {
        toast.success("Login successful");

        if (res.user && res.accessToken) {
          setUserData(res.user, res.accessToken);
          setCookie("accessToken", res.accessToken);
          router.push("/home");
        } else {
          toast.error("Failed to login");
        }
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to login");
    }
  }

  const sendOTPforLogin = async () => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      const role =
        queryParams.get("role") === "recruiter" ? "recruiter" : "user";

      const res = await handleSendOTP(form.getValues("email"), role);
      if (res.otpSent) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send OTP");
    }
  };

  const handleNextAuthLogin = async (method: string) => {
    try {
      await signIn(method);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!data || !data.user) {
      return;
    }

    const email = data.user.email as string;

    const queryParams = new URLSearchParams(window.location.search);
    const role = queryParams.get("role") === "recruiter" ? "recruiter" : "user";

    const handleLogin = async () => {
      const res = await nextAuthLogin({ email, role });

      if (res.status === "success") {
        toast.success(res.message);
        if (res.user && res.accessToken) {
          setUserData(res.user, res.accessToken);
          setCookie("accessToken", res.accessToken);
        }
      } else {
        toast.error(res.message);
      }

      await signOut();
    };

    handleLogin();
  }, [data, router, setUserData]);

  return (
    <div className="bg-primary-foreground flex flex-col items-center justify-center md:h-screen relative p-4 md:p-0 h-screen">
      <Link href="/" className="absolute top-2 left-4 max-w-[110px]">
        <Image
          src={"/home/navbar/wizelogo.svg"}
          width={180}
          height={100}
          alt="logo"
          className="w-full h-auto drop-shadow-md"
        />
      </Link>
      <div className="bg-white rounded-lg md:rounded-tr-[5.5rem] md:rounded-bl-[5.5rem] p-3 gap-2 w-full max-w-5xl flex flex-col md:flex-row md:min-h-[50vh] 3xl:min-h-[750px] 3xl:max-w-[1300px] shadow-md items-center xl:h-[46vw] lg:h-[50vw] 2xl:h-[35vw] lg:min-h-[612px]">
        <div className="justify-evenly flex-col items-center hidden md:flex w-full md:max-w-[350px] bg-primary rounded-lg md:rounded-tr-5xl md:rounded-bl-5xl p-4 mb-4 md:mb-0 relative h-full">
     
            <Image
              src={"/images/Globe.svg"}
              alt="globe"
              className="w-full"
              width={100}
              height={100}
            />
          <Link href={"/login?role=recruiter"}>
            <button className="bg-white text-primary p-2 rounded-sm font-semibold">
              Login as Recruiter
            </button>
          </Link>
          <Link href={"/login"}>
            <button className="bg-white text-primary p-2 rounded-sm font-semibold">
              Login as User
            </button>
          </Link>
        </div>

        <div className="w-full  md:h-full md:min-h-[80vh] p-4 md:p-6 flex flex-col justify-center">
          <>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="your-email@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="button"
                  onClick={sendOTPforLogin}
                  className="font-semibold bg-primary text-white p-2 rounded-sm text-xs transition-all duration-300 hover:shadow-lg"
                >
                  Next
                </button>

                <div className="flex justify-between items-center mt-12 mb-4">
                  <Button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-full font-bold flex hover:bg-primary items-center gap-2 hover:scale-105 duration-200 md:text-xl "
                  >
                    Submit
                    <CircleArrowOutUpRight />
                  </Button>
                </div>
              </form>
            </Form>

            <button
              type="button"
              className="flex items-center justify-center w-full bg-white text-gray-500 md:shadow p-3 border-1 rounded-l space-x-2  font-semibold transition-all duration-300 hover:shadow-sm hover:transform hover:scale-[1.02] text-lg"
              onClick={() => handleNextAuthLogin("google")}
            >
              <Image
                src={"/images/Google_Icons-09-512.png"}
                alt="google login"
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="text-slate-600 font-medium">
                Login using Google
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-full bg-white text-slate-500 md:shadow p-3 border-1 rounded-l space-x-2  font-semibold transition-all duration-300 hover:shadow-sm hover:transform hover:scale-[1.02] text-lg"
              onClick={() => handleNextAuthLogin("linkedin")}
            >
              <Linkedin />
              <span className="text-slate-600 font-medium">
                Login using LinkedIn
              </span>
            </button>
          </>
        </div>
      </div>
    </div>
  );
}
