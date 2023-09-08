import { Link } from "react-router-dom";

import { Button } from "@/view/components/Button";
import { Input } from "@/view/components/Input";

export function Register() {
  return (
    <div>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px] text-center">
          Crie sua conta
        </h1>

        <p className="space-x-2">
          <span
            className="text-gray-700 tracking-[-0.05px]"
          >
            Já possui uma conta?
          </span>

          <Link
            to="/login"
            className="text-teal-900 font-medium tracking-[-0.05px]"
          >
            Fazer Login
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4">
        <Input
          name="name"
          type="text"
          placeholder="Nome"
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
        />

        <Button
          type="submit"
          className="mt-2"
        >
          Criar conta
        </Button>
      </form>
    </div>
  )
}
