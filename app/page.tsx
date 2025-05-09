"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(6, {
    message: "Le login ne respecte pas la politique de securité du système",
  }),
  password: z.string().min(8, {
    message:
      "Le mot de passe ne respecte pas notre politique de sécurité , essayez à nouveau",
  }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen  grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-white via-cyan-200 to-yellow-200 ">
      {/* <div className="flex justify-center py-[17rem] "> */}
      <div className="grid grid-cols-1  content-center px-5 md:px-50">
        <Card className="shadow-lg shadow-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-5 my-0 py-0">
              <Image
                src={"/assets/online-banking.svg"}
                width={50}
                height={30}
                alt="Bis Connect"
              />
              <h1 className="text-lg md:text-2xl text-center">
                Bis Connect - E-Banking
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom Utilisateur</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Nom Utilisateur"
                          {...field}
                          className="py-3 "
                        />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input placeholder="Mot de passe" {...field} />
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="py-3 text-lg">
                  Entrer
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="hidden md:flex justify-center items-center ">
        <Image
          src={"/assets/tamweel-new-scaled.png"}
          width={450}
          height={250}
          alt="Logo image"
        />
      </div>
    </div>
  );
}
