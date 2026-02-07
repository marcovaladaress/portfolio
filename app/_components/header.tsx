import { Button } from "@/components/ui/button";
import { TextAlignJustify } from "lucide-react";

const Header = () => {
  return (
    <div className="mx-auto md:container">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <div className="bg-primary flex h-7 w-7 items-center justify-center rounded">
            <p className="text-center text-sm font-bold">D</p>
          </div>
          <h1 className="text-[14px] font-medium">Dev.Portfólio</h1>
        </div>
        <div className="md:hidden">
          <Button variant={"ghost"}>
            <TextAlignJustify />
          </Button>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-5">
            <li className="text-muted-foreground hover:text-primary cursor-pointer hover:delay-150">
              Início
            </li>
            <li className="text-muted-foreground hover:text-primary cursor-pointer hover:delay-150">
              Sobre
            </li>
            <li className="text-muted-foreground hover:text-primary cursor-pointer hover:delay-150">
              Projetos
            </li>
            <Button>Entrar em contato</Button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
