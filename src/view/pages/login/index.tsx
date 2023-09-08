import { Link } from "react-router-dom";

import { Input } from "@/view/components/Input";
import { Button } from "@/view/components/Button";

export function Login() {
  return (
    <div>
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px] text-center">
          Entre em sua conta
        </h1>

        <p className="space-x-2">
          <span
            className="text-gray-700 tracking-[-0.05px]"
          >
            Novo por aqui?
          </span>

          <Link
            to="/register"
            className="text-teal-900 font-medium tracking-[-0.05px]"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4">
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
          Entrar
        </Button>
      </form>
    </div>
  )
}
