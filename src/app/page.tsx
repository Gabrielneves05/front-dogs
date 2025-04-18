import picturesGet from "@/actions/pictures-get";
import Feed from "@/components/feed/feed";

export default async function Home() {
  const data = await picturesGet();

  return (
    <section className="container mainContainer">
      <Feed pictures={data} />
    </section>
  );
}