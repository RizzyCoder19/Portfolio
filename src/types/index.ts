import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type WithClassName = {
  className?: string;
};

export type PolymorphicProps<T extends ElementType> = WithClassName &
  Omit<ComponentPropsWithoutRef<T>, keyof WithClassName | "as"> & {
    as?: T;
  };

export type ChildrenProps = {
  children: ReactNode;
};
