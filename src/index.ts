import { NodeRuntime } from "@effect/platform-node";
import { Console, Effect } from "effect";

const double = (x: number) => x * 2;

const main = Effect.succeed(2).pipe(
  Effect.map(double),
  Effect.tapError(Console.error),
  Effect.tap(Console.log),
);

main.pipe(NodeRuntime.runMain);
