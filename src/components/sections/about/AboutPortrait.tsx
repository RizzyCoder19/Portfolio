"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function AboutPortrait() {
  return (
    <div className="flex items-center justify-center lg:justify-end">
      <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/images/portrait.png"
            alt="Khan Umar portrait"
            width={480}
            height={640}
            priority
            className={cn(
              "aspect-[3/4] w-full object-cover",
              "rounded-xl border border-border",
              "bg-surface",
              "overflow-hidden",
            )}
          />
        </motion.div>
      </div>
    </div>
  );
}
