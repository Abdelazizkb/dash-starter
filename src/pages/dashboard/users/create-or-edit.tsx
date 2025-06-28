import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components";

import type { IPopup } from "@/lib/use-popup";
import type { IUser } from "./list";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { Textarea } from "@/components/ui/textarea";
import { useUserForm } from "./use-form";
import { useEffect } from "react";

const CreateOrEditUserModal: React.FC<IPopup<IUser>> = (props) => {
  const {
    watch,
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useUserForm(props.data);

  const onSubmit = (data: IUser) => {
    console.log("submit", { data });
    props.close();
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    props.data?.id ? reset(props.data) : reset({ firstname: "", lastname: "" });
  }, [props.data]);

  return (
    <Dialog open={props.isOpen} onOpenChange={props.setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        {!props.data ? (
          <DialogHeader>
            <DialogTitle>New User</DialogTitle>
            <DialogDescription>
              Create new user here. Click confirm when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
        ) : (
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to your user here. Click save when you&apos;re done.{" "}
            </DialogDescription>
          </DialogHeader>
        )}
        <form
          id="create-or-edit-user-form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-md"
        >
          <div>
            <Label htmlFor="firstname" className="py-2">
              First Name
            </Label>
            <Input {...register("firstname")} placeholder="John" />
            {errors.firstname && (
              <p className="text-red-500 text-sm">{errors.firstname.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="lastname" className="py-2">
              Last Name
            </Label>
            <Input {...register("lastname")} placeholder="Doe" />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="py-2">
              Email
            </Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="role" className="py-2">
              Role
            </Label>
            <Select
              defaultValue={watch("role")}
              onValueChange={(value) =>
                setValue("role", value as IUser["role"])
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="comment" className="py-2">
              Comment
            </Label>
            <Textarea {...register("comment")} placeholder="Optional comment" />
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button form="create-or-edit-user-form" type="submit">
            {!props.data ? "Confirm" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrEditUserModal;
