export const V3_CONFIG = {
  longPressMs: 3000,
  longPressActivationMs: 450,
  finishHoldMs: 3000,
  powerOffHoldMs: 3000,
  bootDurationMs: 1500,
  feedbackDurationMs: 900,
  standbyAfterMs: 3 * 60 * 1000,
  powerOffAfterMs: 10 * 60 * 1000,
  minLevel: 1,
  maxLevel: 15,
  defaultLevel: 9,
  defaultSpeed: 2,
  maxSpeed: 5,
  defaultMode: "stimulation" as PumpMode,
};

export type PumpMode = "stimulation" | "expression" | "powerPumping" | "milkBoost" | "cozyFlow" | "customized";
export type ScreenState = "off" | "boot" | "home" | "menu" | "pumping" | "paused" | "level" | "endingPump" | "finish" | "modeSuccess" | "poweringOff" | "standby" | "sealChecking" | "sealPassed" | "leakCheck";

export const MODE_COLORS: Record<PumpMode, string> = {
  stimulation: "#E2637E",
  expression: "#64A4F2",
  powerPumping: "#9C78E8",
  milkBoost: "#9C78E8",
  cozyFlow: "#9C78E8",
  customized: "#9C78E8",
};

export const MODES: Array<{ id: PumpMode; label: string; key: string }> = [
  { id: "stimulation", label: "Stimulate", key: "Q" },
  { id: "expression", label: "Expression", key: "W" },
];

export const MENU_ITEMS = [
  { label: "Stimulation", estimate: "≈ 45min", mode: "stimulation" as PumpMode, image: "/assets/screen/菜单子项-1-stimuation.png" },
  { label: "Expression", estimate: "≈ 45min", mode: "expression" as PumpMode, image: "/assets/screen/菜单子项-2-expression.png" },
  { label: "Power Pumping", estimate: "≈ 45min", mode: "powerPumping" as PumpMode, image: "/assets/screen/菜单子项-3-program1-power pumping.png" },
  { label: "Milk Boost", estimate: "≈ 20min", mode: "milkBoost" as PumpMode, image: "/assets/screen/菜单子项-3-program1-power pumping.png" },
  { label: "Cozy Flow", estimate: "≈ 21.5min", mode: "cozyFlow" as PumpMode, image: "/assets/screen/菜单子项-3-program1-power pumping.png" },
  { label: "Customized", estimate: "", mode: "customized" as PumpMode, image: "/assets/screen/菜单子项-3-program1-power pumping.png" },
];
