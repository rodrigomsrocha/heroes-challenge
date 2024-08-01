import { Lightning, MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="py-4 flex justify-between items-center">
      <div className="flex flex-1 gap-2">
        <Lightning size={24} />
        <h1 className="text-lg font-semibold items-center">Heroes</h1>
      </div>
      <div className="flex gap-2 items-center max-w-72 w-full ">
        <Input type="text" placeholder="Digite o nome do herói" className="flex-1" />
        <Button size="icon" className="shrink-0">
          <MagnifyingGlass size={18} weight="bold" />
        </Button>
      </div>
    </header>
  );
}