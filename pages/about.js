import ContentBanner from "../components/contentBanner";
import AppLayout from "../components/layout";

export default function Home() {
  return (
    <AppLayout>
      <ContentBanner imgSrc="url(/images/banner-home.jpg)" h1="about us" />
    </AppLayout>
  );
}
