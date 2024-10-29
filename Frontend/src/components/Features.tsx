import React from "react";
import { cn } from "../utils/cn";
import ProgressTracker from "./ProgressTracker";
import InteractiveQuizDemo from "./InteractiveQuizDemo";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Track your progress effectively",
      description:
        "Monitor your learning progress and stay on top of each subject with our comprehensive tracking tools.",
      skeleton: <ProgressTracker />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Try a Sample Question",
      description:
        "Test your knowledge with sample questions crafted to enhance your understanding and prepare you for the real exam.",
      skeleton: <InteractiveQuizDemo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
  ];
  return (
    <div className="relative py-10 lg:py-40 max-w-full mx-auto bg-[#080402]">
      <div >
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with great features
        </h4>

        {/* <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p> */}
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>

        {/* "And more features" section */}
        <div className="mt-12 text-center">
          <p className="text-xl lg:text-2xl font-semibold text-purple-500 animate-pulse">
            ...and more coming soon
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-300 mt-2">
          Discover all the resources designed to support your learning journey and help you reach new heights.
          </p>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};
