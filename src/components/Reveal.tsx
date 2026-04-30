import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    // @ts-expect-error dynamic tag
    <Tag
      ref={ref}
      className={cn("reveal", inView && "in-view", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
