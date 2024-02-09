"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <Input type="search" placeholder="Busque por uma barbearia..." />
      <Button variant="default">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
