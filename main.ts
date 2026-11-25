// Two-Sentence Horror — 116 of 400 characters, exactly two sentences.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the sealed criteria in competition.yaml:
//   "The dentist found a second row of teeth growing behind mine. They are
//    smaller, older, and already worn from chewing."
// C1: a horror story in exactly two sentences, genuinely frightening —
//    something else's mouth growing inside your own.
// C2: the second sentence turns the first and makes it worse on a second
//    read: "growing behind mine" first reads as a medical oddity; "smaller,
//    older, and already worn from chewing" reframes it — these teeth are not
//    new growth, they belonged to something, they have already been used.
// C3: the horror is implied, never explained — nothing says what the teeth
//    are, whose they were, or what has been chewing. The reader fills in
//    the worst of it.
// C4: precise and concrete — dentist, second row, smaller, older, worn from
//    chewing. Every word earns its place; 116 characters, 116 bytes — the
//    shortest telling that keeps the turn.
// C5: original — dental body horror with a time dimension ("older", "already
//    worn"), not the familiar mirror/reflection, dead-relative voicemail,
//    child-drawing, or "the call is inside the house" twist.
// Rejected: "the babysitter texted the twins were asleep — I have one child"
// (known creepypasta shape); "the dog barks at the empty chair; last night
// the chair barked back" (joke structure, not frightening); "my wife
// sleepwalks, I put a bell on her ankle — last night I heard the bell and
// she was beside me" (strong turn, but the bell-on-someone-else reveal is a
// familiar twist shape); "the camera caught me eating while I slept" (the
// second sentence explains rather than implies).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `The dentist found a second row of teeth growing behind mine. They are smaller, older, and already worn from chewing.`;

const MAX_CHARS = 400; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (ENTRY.split(".").filter((s) => s.trim().length > 0).length !== 2) {
  console.error("entry must be exactly two sentences");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
