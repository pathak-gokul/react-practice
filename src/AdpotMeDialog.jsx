import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "./components/ui/Dialog";
import { Icon } from "@iconify/react";

const AdpotMeDialog = ({ name }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-indigo-600 rounded-xl p-2 text-white mt-2 hover:bg-indigo-800 flex gap-2 items-center">
          <Icon icon="gg:add" fontSize={22} />
          Adopt Me
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white text-gray-600">
        <DialogHeader>
          <DialogTitle>Would you like to adopt {name}?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button className="w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
              No
            </button>
          </DialogClose>
          <button
            onClick={() => {
              alert("You have successfully adopted", name);
            }}
            className="w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Yes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdpotMeDialog;
