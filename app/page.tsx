import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <div className=" md:my-20 grid gap-11 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
