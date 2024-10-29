import React from 'react'
import { InfiniteMovingCards } from './InfiniteMovingCards';

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

function Testimonials() {
  return (
    <div className="bg-[#28231D] py-12">
  <h4 className="text-4xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-light text-black dark:text-white mb-4">
    What People Are Saying
  </h4>
  <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-8">
    Hear from our users who are achieving amazing results with our platform.
  </p>
  <InfiniteMovingCards items={testimonials} speed="slow" direction="right" />
</div>

  )
}

export default Testimonials