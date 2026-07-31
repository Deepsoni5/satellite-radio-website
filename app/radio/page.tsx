import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  RadioIdLead,
  ActivationInfoSections,
} from "@/components/radio-page-sections";

export const metadata = {
  title: "SXM Radio Activation & Support | Satellite Radio",
  description:
    "Activate your SiriusXM radio, find your Radio ID, and get 24/7 support for signal issues, subscriptions, and setup.",
};

export default function RadioPage() {
  return (
    <>
      <Navbar />
      <main>
        <RadioIdLead variant="activation" />
        <ActivationInfoSections />
      </main>
      <Footer />
    </>
  );
}
