"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TypeAnimation } from "react-type-animation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
    <div className="min-h-screen  grid grid-cols-1 xl:grid-cols-2 bg-gradient-to-b from-white via-cyan-200 to-yellow-200 sm:justify-items-center sm:content-center ">
      <div className="grid grid-cols-1  content-center px-5  lg:px-50">
        <h1 className="text-md sm:text-[6px] sm:w-[500px]  xl:text-xl text-center mb-20 font-bold bg-gradient-to-r from-red-600 to-yellow-300 bg-clip-text text-transparent">
          <TypeAnimation
            sequence={[
              "Bienvenue sur votre espace client",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Vous êtes sur Bis Connect e-banking",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.3em", display: "inline-block"  }}
            repeat={Infinity}
          />
        </h1>
        <Card className="shadow-lg shadow-slate-200 sm:w-[500px]">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-5 my-0 py-0">
              <Image
                src={"/assets/online-banking.svg"}
                width={50}
                height={30}
                alt="Bis Connect"
              />
              <h1 className="text-lg sm:text-[12px] xl:text-2xl text-center">
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

                <Button
                  type="submit"
                  className="py-4 text-xl tracking-wide bg-blue-950"
                >
                  Entrer
                </Button>
              </form>

              <p className="text-sm text-center mt-7 ">
                Demandez un accès via ce lien 👉{" "}
                <Link href={"http://bis-bank.com/"} target="_new">
                  {" "}
                  <span className="text-red-600 underline underline-offset-4">
                    Bis Connect
                  </span>
                </Link>{" "}
              </p>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="hidden xl:grid xl:grid-cols-1 content-center justify-items-center ">
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
