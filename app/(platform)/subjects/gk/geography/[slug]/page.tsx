import { permanentRedirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata(_: Props) {
  return { title: "Geography · ToThePoint-SSC" };
}

export default async function GeographyTopicPage(_: Props) {
  permanentRedirect("/subjects/gk/geography");
}
