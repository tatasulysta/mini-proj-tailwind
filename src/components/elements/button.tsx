import React, { ComponentPropsWithoutRef } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
};

type ButtonProps = BaseProps &
  ({
    tag?: "button";
  } & ComponentPropsWithoutRef<"button">);

type AnchorProps = BaseProps &
  ({
    tag: "a";
  } & ComponentPropsWithoutRef<"a">);

type CombinedProps = ButtonProps | AnchorProps;

export function Button(props: CombinedProps) {
  const {
    variant = "primary",
    tag = "button",
    className = "",
    children,
    ...rest
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-bold transition-all hover:opacity-90 active:scale-[0.98]";

  const variantStyles = {
    primary: "bg-brand-primary text-white shadow-lg shadow-brand-primary/25",
    secondary: "bg-transparent text-brand-primary",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-foreground/5",
  };

  const finalClassName =
    `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (tag === "a") {
    return (
      <a
        className={finalClassName}
        {...(rest as ComponentPropsWithoutRef<"a">)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={finalClassName}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
