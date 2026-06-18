import Navbar from "../../components/Navbar";
import FooterSection from "../../sections/FooterSection";

import {
  CreditCard,
  Wallet,
  Landmark,
  Globe,
  Smartphone,
} from "lucide-react";

const paymentMethods = [
  {
    title: "UPI",
    description:
      "Instant payments using any UPI application.",
    icon: Smartphone,
  },

  {
    title: "Credit Card",
    description:
      "Pay securely using Visa, Mastercard and RuPay cards.",
    icon: CreditCard,
  },

  {
    title: "Debit Card",
    description:
      "Accepted from all major Indian banks.",
    icon: CreditCard,
  },

  {
    title: "Net Banking",
    description:
      "Direct bank transfers through secure gateways.",
    icon: Landmark,
  },

  {
    title: "Wallets",
    description:
      "Pay using PayTm, PhonePe, Amazon Pay and more.",
    icon: Wallet,
  },

  {
    title: "International Payment",
    description:
      "Secure global payments for international clients.",
    icon: Globe,
  },
];

export const metadata = {
  title: "Payments",
  description:
    "Secure payment portal for Civilizationn Tech Solutions",
};

export default function PaymentsPage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-background
          text-foreground
        "
      >
        {/* Hero Section */}
        <section
          className="
            py-24
            px-6
            border-b
            border-foreground/10
          "
        >
          <div className="max-w-7xl mx-auto text-center">

            <div
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-cyan-500/40
                bg-cyan-500/10
                text-cyan-400
                mb-6
              "
            >
              Secure Payments
            </div>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
                leading-tight
              "
            >
              Payment Portal
            </h1>

            <p
              className="
                mt-8
                max-w-3xl
                mx-auto
                text-lg
                text-gray-500
                dark:text-gray-400
              "
            >
              Choose your preferred payment method and
              complete transactions securely with
              Civilizationn Tech Solutions.
            </p>

          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-24 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <h2 className="text-4xl font-bold">
                Available Payment Methods
              </h2>

              <p
                className="
                  mt-4
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Fast, secure and trusted payment options.
              </p>

            </div>

            <div
              className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >
              {paymentMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <div
                    key={method.title}
                    className="
                      group
                      rounded-3xl
                      border
                      border-foreground/10
                      bg-white
                      dark:bg-neutral-900
                      p-8
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-cyan-500/50
                      hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                    "
                  >
                    <div
                      className="
                        h-16
                        w-16
                        rounded-2xl
                        bg-cyan-500/10
                        flex
                        items-center
                        justify-center
                        mb-6
                      "
                    >
                      <Icon
                        size={30}
                        className="text-cyan-400"
                      />
                    </div>

                    <h3
                      className="
                        text-2xl
                        font-semibold
                        mb-4
                      "
                    >
                      {method.title}
                    </h3>

                    <p
                      className="
                        text-gray-500
                        dark:text-gray-400
                        leading-7
                      "
                    >
                      {method.description}
                    </p>

                    <button
                      className="
                        mt-8
                        px-6
                        py-3
                        rounded-xl
                        bg-cyan-500
                        text-black
                        font-semibold
                        transition-all
                        duration-300
                        hover:scale-105
                      "
                    >
                      Proceed
                    </button>

                  </div>
                );
              })}
            </div>

          </div>

        </section>

        {/* Security Section */}
        <section
          className="
            py-20
            px-6
            border-t
            border-foreground/10
          "
        >
          <div
            className="
              max-w-5xl
              mx-auto
              text-center
            "
          >
            <h2 className="text-4xl font-bold">
              Secure & Trusted Transactions
            </h2>

            <p
              className="
                mt-6
                text-lg
                text-gray-500
                dark:text-gray-400
              "
            >
              All payments are processed through secure
              and industry-standard payment gateways
              ensuring privacy, integrity and protection
              of your financial information.
            </p>

          </div>
        </section>

      </main>

      <FooterSection />
    </>
  );
}