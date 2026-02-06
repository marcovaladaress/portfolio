import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TextAlignJustify } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <div className="bg-primary flex h-7 w-7 items-center justify-center rounded">
            <p className="text-center text-sm font-bold">D</p>
          </div>
          <h1 className="text-[14px] font-medium">Dev.Portfólio</h1>
        </div>
        <Button variant={"ghost"}>
          <TextAlignJustify />
        </Button>
      </div>

      <Separator />
    </>
  );
};

export default Header;
