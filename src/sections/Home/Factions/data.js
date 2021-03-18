import { StaticImage } from 'gatsby-plugin-image';

export const questions = [
  {
    title: `What will the factions bring to Hack the Valley 5?`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum, augue ac elementum feugiat, odio felis iaculis ex, ac mattis eros magna at felis. Phasellus vitae sodales dui. Sed vitae porta nunc, vel mattis nisl. Donec sodales neque non eros interdum elementum. Quisque non suscipit urna. Praesent volutpat cursus feugiat. Quisque blandit arcu id velit condimentum dictum. Donec dui ante, cursus varius mattis non, rutrum maximus ligula. Vivamus posuere lacus est, quis fringilla sem volutpat in.`,
  },
];

export const factions = [
  {
    name: `Health`,
    image: props => (
      <StaticImage
        className={props.className}
        src="../../../images/faction-icons/factions-health.png"
        placeholder="TRACED_SVG"
        alt="Health Faction"
        width={400}
      />
    ),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum, augue ac elementum feugiat, odio felis iaculis ex, ac mattis eros magna at felis. Phasellus vitae sodales dui. Sed vitae porta nunc, vel mattis nisl. Donec sodales neque non eros interdum elementum. Quisque non suscipit urna. Praesent volutpat cursus feugiat. Quisque blandit arcu id velit condimentum dictum. Donec dui ante, cursus varius mattis non, rutrum maximus ligula. Vivamus posuere lacus est, quis fringilla sem volutpat in.`,
  },
  {
    name: `Nature`,
    image: props => (
      <StaticImage
        className={props.className}
        src="../../../images/faction-icons/factions-nature.png"
        placeholder="TRACED_SVG"
        alt="Nature Faction"
        width={400}
      />
    ),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum, augue ac elementum feugiat, odio felis iaculis ex, ac mattis eros magna at felis. Phasellus vitae sodales dui. Sed vitae porta nunc, vel mattis nisl. Donec sodales neque non eros interdum elementum. Quisque non suscipit urna. Praesent volutpat cursus feugiat. Quisque blandit arcu id velit condimentum dictum. Donec dui ante, cursus varius mattis non, rutrum maximus ligula. Vivamus posuere lacus est, quis fringilla sem volutpat in.`,
  },
  {
    name: `Technology`,
    image: props => (
      <StaticImage
        className={props.className}
        src="../../../images/faction-icons/factions-technology.png"
        placeholder="TRACED_SVG"
        alt="Technology Faction"
        width={400}
      />
    ),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum, augue ac elementum feugiat, odio felis iaculis ex, ac mattis eros magna at felis. Phasellus vitae sodales dui. Sed vitae porta nunc, vel mattis nisl. Donec sodales neque non eros interdum elementum. Quisque non suscipit urna. Praesent volutpat cursus feugiat. Quisque blandit arcu id velit condimentum dictum. Donec dui ante, cursus varius mattis non, rutrum maximus ligula. Vivamus posuere lacus est, quis fringilla sem volutpat in.`,
  },
  {
    name: `Discovery`,
    image: props => (
      <StaticImage
        className={props.className}
        src="../../../images/faction-icons/factions-discovery.png"
        placeholder="TRACED_SVG"
        alt="Discovery Faction"
        width={400}
      />
    ),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum, augue ac elementum feugiat, odio felis iaculis ex, ac mattis eros magna at felis. Phasellus vitae sodales dui. Sed vitae porta nunc, vel mattis nisl. Donec sodales neque non eros interdum elementum. Quisque non suscipit urna. Praesent volutpat cursus feugiat. Quisque blandit arcu id velit condimentum dictum. Donec dui ante, cursus varius mattis non, rutrum maximus ligula. Vivamus posuere lacus est, quis fringilla sem volutpat in.`,
  },
];
