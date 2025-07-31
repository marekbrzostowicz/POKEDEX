export const colorMap = {
  fire: "border-red-500",
  water: "border-blue-500",
  grass: "border-green-500",
  electric: "border-yellow-500",
  psychic: "border-purple-500",
  ice: "border-cyan-400",
  dragon: "border-indigo-600",
  dark: "border-gray-800",
  fighting: "border-red-700",
  poison: "border-purple-700",
  ground: "border-yellow-600",
  flying: "border-blue-300",
  bug: "border-yellow-900",
  rock: "border-yellow-800",
  ghost: "border-purple-800",
  steel: "border-gray-500",
  fairy: "border-pink-400",
  normal: "border-gray-400",
} as const;

export const getColor = (typeName: string): string => {
  return colorMap[typeName as keyof typeof colorMap] || "bg-slate-400";
};

