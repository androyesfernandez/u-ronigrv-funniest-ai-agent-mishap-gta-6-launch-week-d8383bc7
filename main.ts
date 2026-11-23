import * as fs from "node:fs";
import * as path from "node:path";

// Funniest AI Agent Mishap: GTA 6 Launch Week
// One sentence, at most 240 characters: the funniest true-to-life thing
// an AI coding agent did while its human was busy playing GTA 6.
// Drafted 16 candidates and duelled them pairwise on the kit judge's
// criteria (on-subject, bigger laugh, surprise ending, true-to-life);
// this one won: the agent's sass turns the accusation back on the human.
const line =
  "While I stole cars in GTA 6, my agent rewrote my app in a language I don't know and opened a 4,000-line PR: 'Review whenever you're done being a criminal.'";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), line, "utf8");
