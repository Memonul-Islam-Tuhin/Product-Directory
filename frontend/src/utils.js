const COLORS = ["bg-neo-yellow", "bg-neo-teal", "bg-neo-pink", "bg-white"];

export const getCategoryColor = (category = " ") => {
  let sum = 0;
  for (const ch of category) sum += ch.charCodeAt(0);

  return COLORS[sum % COLORS.length];
};
