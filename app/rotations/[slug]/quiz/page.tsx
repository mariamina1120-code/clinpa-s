"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import type { RotationSlug, QuizQuestion } from "@/types";
import { getQuizByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy } from "lucide-react";

export default function QuizPage() {
  const params = useParams();
  const slug = params.slug as RotationSlug;
  const questions = getQuizByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES] ?? slug;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);

  const q: QuizQuestion | undefined = questions[current];

  // Normalise question text — supports both `question` and `stem` fields
  const questionText = q?.question ?? q?.stem ?? "";

  // Normalise options — supports both string[] ("A. text") and {label,text}[]
  const options: string[] = q?.options ??
    (q?.optionsStructured?.map((o) => `${o.label}. ${o.text}`) ?? []);

  const handleSelect = useCallback(
    (optionStr: string) => {
      if (answered[current] !== undefined) return;
      const letter = optionStr.charAt(0).toUpperCase();
      setSelected(letter);
      setShowExplanation(true);
      if (letter === q?.correctAnswer) setScore((s) => s + 1);
      setAnswered((prev) => ({ ...prev, [current]: letter }));
    },
    [current, answered, q]
  );

  const handleNext = useCallback(() => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  }, [current, questions.length]);

  const handleReset = useCallback(() => {
    setCurrent(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setAnswered({});
    setFinished(false);
  }, []);

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center">
        <p className="text-muted-foreground">No quiz questions loaded for this rotation.</p>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto space-y-6 py-8 text-center">
        <div className="flex justify-center">
          <Trophy className={cn("h-16 w-16", pct >= 80 ? "text-yellow-500" : pct >= 60 ? "text-slate-400" : "text-red-400")} />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{pct}%</h1>
          <p className="text-muted-foreground mt-1">{score} / {questions.length} correct</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {pct >= 80 ? "Excellent — you're exam-ready!" : pct >= 60 ? "Good effort — review missed questions." : "Keep studying — revisit conditions and pharmacology."}
        </p>
        <Button onClick={handleReset} className="gap-2">
          <RotateCcw className="h-4 w-4" /> Retake Quiz
        </Button>
      </div>
    );
  }

  if (!q) return null;

  const isAnswered = answered[current] !== undefined;
  const isCorrect = selected === q.correctAnswer;

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">Quiz Mode</h1>
          <p className="text-xs text-muted-foreground">{rotationName}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{current + 1} / {questions.length}</p>
          <p className="text-xs text-muted-foreground">Score: {score}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-muted rounded-full h-1.5">
        <div
          className="bg-teal-500 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="border rounded-xl p-5 bg-card space-y-4">
        <div className="flex items-start gap-2">
          {(q.topic ?? q.category) && (
            <Badge variant="secondary" className="text-xs">
              {q.topic ?? q.category}
            </Badge>
          )}
          {q.difficulty && (
            <Badge
              variant="outline"
              className={cn(
                "text-xs ml-auto shrink-0",
                q.difficulty === "hard" && "border-red-300 text-red-600",
                q.difficulty === "medium" && "border-yellow-300 text-yellow-600",
                q.difficulty === "easy" && "border-green-300 text-green-600"
              )}
            >
              {q.difficulty}
            </Badge>
          )}
        </div>

        <p className="text-sm font-medium leading-relaxed">{questionText}</p>

        <div className="space-y-2">
          {options.map((option) => {
            const letter = option.charAt(0).toUpperCase();
            const isSelected = selected === letter;
            const isRight = letter === q.correctAnswer;

            return (
              <button
                key={letter}
                onClick={() => handleSelect(option)}
                disabled={isAnswered}
                className={cn(
                  "w-full text-left text-sm rounded-lg border px-4 py-3 transition-all",
                  !isAnswered && "hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 cursor-pointer bg-card",
                  isAnswered && isRight && "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200",
                  isAnswered && isSelected && !isRight && "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200",
                  isAnswered && !isSelected && !isRight && "opacity-50 bg-card"
                )}
              >
                <span className="flex items-center gap-3">
                  {isAnswered && isRight && <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />}
                  {isAnswered && isSelected && !isRight && <XCircle className="h-4 w-4 text-red-500 shrink-0" />}
                  {(!isAnswered || (!isRight && !isSelected)) && <span className="h-4 w-4 shrink-0" />}
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Result banner */}
      {isAnswered && (
        <div className={cn(
          "rounded-xl border p-3 px-4 text-sm flex items-center gap-2",
          isCorrect ? "border-green-300 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                    : "border-red-300 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200"
        )}>
          {isCorrect
            ? <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
            : <XCircle className="h-4 w-4 shrink-0 text-red-500" />}
          <span className="font-medium">{isCorrect ? "Correct!" : `Incorrect — Answer: ${q.correctAnswer}`}</span>
        </div>
      )}

      {/* Explanation */}
      {showExplanation && q.explanation && (
        <div className="border rounded-xl p-4 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300 mb-2">Explanation</h3>
          <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {isAnswered && (
        <div className="flex justify-end">
          <Button onClick={handleNext} className="gap-2">
            {current + 1 >= questions.length ? "See Results" : "Next Question"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
