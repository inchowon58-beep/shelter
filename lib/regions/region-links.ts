import { subRegionDefinitions } from "./subregions";

export type RegionLink = {
  name: string;
  label: string;
  href: string;
  slug: string;
};

function toLabel(name: string): string {
  return `${name}강아지파양`;
}

export const mainRegionLink: RegionLink = {
  name: "인천",
  label: toLabel("인천"),
  href: "/",
  slug: "",
};

const slugToLink = new Map(
  subRegionDefinitions.map((def) => [
    def.slug,
    {
      name: def.name,
      label: toLabel(def.name),
      href: `/${def.slug}`,
      slug: def.slug,
    },
  ]),
);

function linksFromSlugs(slugs: string[]): RegionLink[] {
  return slugs
    .map((slug) => slugToLink.get(slug))
    .filter((link): link is RegionLink => link !== undefined);
}

export const regionLinkGroups: { title: string; links: RegionLink[] }[] = [
  {
    title: "충청·강원·경기",
    links: linksFromSlugs([
      "cheongju",
      "onyang",
      "chungju",
      "chuncheon",
      "yeoju",
      "wonju",
      "icheon",
      "anyang",
      "ansan",
      "yongin",
    ]),
  },
  {
    title: "수도권 북부·동부",
    links: linksFromSlugs([
      "suji",
      "wirye",
      "gwacheon",
      "ilsan",
      "gimpo",
      "namyangju",
      "uijeongbu",
      "uiwang",
      "dongducheon",
      "gunpo",
    ]),
  },
  {
    title: "경기 남부·충남",
    links: linksFromSlugs([
      "gumi",
      "sanbon",
      "seongnam",
      "bundang",
      "pyeongtaek",
      "dongtan",
      "songtan",
      "osan",
      "taean",
      "seosan",
    ]),
  },
  {
    title: "서울·인천·수도권",
    links: linksFromSlugs([
      "dangjin",
      "hwaseong",
      "hanam",
      "seoul",
      "gangnam",
      "misa",
      "gangdong",
      "yongsan",
      "cheongna",
      "songdo",
    ]),
  },
  {
    title: "전국 주요 도시",
    links: linksFromSlugs([
      "bucheon",
      "busan",
      "ulsan",
      "jeonju",
      "daegu",
      "siheung",
      "gwangmyeong",
      "suwon",
      "mokpo",
      "gwangju",
      "daejeon",
      "jeju",
      "gimhae",
      "jinju",
      "jinhae",
      "miryang",
      "gunsan",
      "eonyang",
    ]),
  },
  {
    title: "서울·강원·충남·경남",
    links: linksFromSlugs([
      "yeongdeungpo",
      "guri",
      "magok",
      "byeollae",
      "jochiwon",
      "hongseong",
      "donghae",
      "taebaek",
      "masan",
      "hongcheon",
      "itaewon",
      "nowon",
    ]),
  },
];

export const allRegionLinks: RegionLink[] = [
  mainRegionLink,
  ...subRegionDefinitions.map((def) => ({
    name: def.name,
    label: toLabel(def.name),
    href: `/${def.slug}`,
    slug: def.slug,
  })),
];
