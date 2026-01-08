import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      style={
        {
          "--duration": "40s",
          "--gap": "3rem",
        } as React.CSSProperties
      }
      className={cn(
        "group flex overflow-hidden py-4 px-4",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0", {
              "animate-[marquee_var(--duration)_linear_infinite] flex-row":
                !vertical && !reverse,
              "animate-[marquee-vertical_var(--duration)_linear_infinite] flex-col":
                vertical && !reverse,
              "animate-[marquee-reverse_var(--duration)_linear_infinite] flex-row":
                !vertical && reverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

