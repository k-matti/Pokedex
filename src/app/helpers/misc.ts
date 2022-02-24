export function getPokemonId(url: string): number {
  const parts = url.split('/');
  const index = +parts[parts.length - 2];
  return index;
}

export function getPokemonAvatar(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
