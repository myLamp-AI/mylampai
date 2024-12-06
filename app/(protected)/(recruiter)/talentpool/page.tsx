"use client";
import { createTalentPool } from "@/actions/talentPoolActions";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  talentPoolSchema,
  TalentPoolFormData,
} from "@/schemas/talentPoolSchema";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUserStore } from "@/utils/userStore";

interface ArrayInputProps {
  value: string[];
  onChange: (value: string[]) => void;
}

function ArrayInput({ value, onChange }: ArrayInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      onChange([...value, inputValue.trim()]);
      setInputValue("");
    }
  };

  const remove = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {value.map((skill, index) => (
          <div
            key={index}
            className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md flex items-center"
          >
            {skill}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="ml-1 h-auto p-0"
              onClick={() => remove(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a skill and press Enter"
      />
    </div>
  );
}

export default function TalentPoolPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userData } = useUserStore();

  const form = useForm<TalentPoolFormData>({
    resolver: zodResolver(talentPoolSchema),
    defaultValues: {
      skills: [],
      profiles: [],
      salary: "",
      locationPref: "",
      experienceNeeded: "",
    },
  });

  const onSubmit = async (data: TalentPoolFormData) => {
    setIsSubmitting(true);
    try {
      if (!userData) return;

      const res = await createTalentPool({
        ...data,
        userId: userData.id,
      });

      if (res === "success") {
        toast.success("Successfully created talent pool");
      } else {
        toast.error("Failed to create talent pool");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Talent Pool</h1>
      <div>
        <h2>Create Talent Pool</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-xl m-auto space-y-8"
          >
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills</FormLabel>
                  <FormControl>
                    <ArrayInput value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profiles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profiles</FormLabel>
                  <FormControl>
                    <ArrayInput value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter salary range" {...field} />
                  </FormControl>
                  <FormDescription>
                    Specify the salary range for the talent pool.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="locationPref"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Preference</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter location preference" {...field} />
                  </FormControl>
                  <FormDescription>
                    Specify the preferred location for the talent pool.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experienceNeeded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Needed</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the experience needed"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Describe the experience required for the talent pool.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
