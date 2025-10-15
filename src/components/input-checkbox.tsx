import { cva } from "class-variance-authority";

export const inputCheckboxWrapperVariants = cva(
  "inline-flex items-center justify-center cursor-pointer relative group"
);

export const inputCheckboxVariants = cva(
  `
   appearance-none peer flex items-center justify-center
   border-2 border-solid transition overflow-hidden 
   border-green-base hover:border-green-dark hover:bg-green-dark/20 
   checked:border-green-base checked:bg-green-base 
   group-hover:checked:bg-green-dark group-hover:checked:border-green-dark
   `,
   {
    variants: {
        size: {
            md: "w-5 h-5 rounded-sm"
        }, 
        disabled: {
            true: "pointer-events-none"
        }
    }, 
    defaultVariants: {
        size: "md",
        disabled: false
    }
   }
);


export const inputCheckboxIconVariants = cva()