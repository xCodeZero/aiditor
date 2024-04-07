import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import { getUserPaymentsGcash } from "@/lib/actions/payments.action";
import { GcashPaymentCollection } from "@/components/shared/GcashPaymentCollection";
import { adminNavLinks, navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const GcashPayments = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  if (user.userRole !== 2) redirect("/sign-in");

  const gcash = await getUserPaymentsGcash({ page });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">Gcash Payment Records</h1>

        {user.userRole === 1 && (
          <ul className="flex-center w-full gap-20">
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="flex-center flex-col gap-2"
              >
                <li className="flex-center w-fit rounded-full bg-white p-4">
                  <Image src={link.icon} alt="image" width={24} height={24} />
                </li>
                <p className="p-14-medium text-center text-white">
                  {link.label}
                </p>
              </Link>
            ))}
          </ul>
        )}

        {user.userRole === 2 && (
          <ul className="flex-center w-full gap-20">
            {adminNavLinks.slice(0, 5).map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="flex-center flex-col gap-2"
              >
                <li className="flex-center w-fit rounded-full bg-white p-4">
                  <Image src={link.icon} alt="image" width={24} height={24} />
                </li>
                <p className="p-14-medium text-center text-white">
                  {link.label}
                </p>
              </Link>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8 md:mt-14">
        <GcashPaymentCollection
          payments={gcash?.data}
          totalPages={gcash?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default GcashPayments;
