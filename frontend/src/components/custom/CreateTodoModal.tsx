import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

interface CreateTodoModalProps {
  onAdd: (title: string) => void;
}

const CreateTodoModal = ({ onAdd }: CreateTodoModalProps) => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) return;
    await onAdd(title);
    setTitle("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>
          <Plus />
          Create Todo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new todo</DialogTitle>
          <DialogDescription>
            <div className="flex gap-2 mt-5">
              <Input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTodoModal;
