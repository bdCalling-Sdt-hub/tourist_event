"use client";

import { useRouter } from "next/navigation";

const ContactsButton = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.push("/join-us")}
        className="button-blue whitespace-nowrap"
      >
        Contacts with us
      </button>
    </>
  );
};

export default ContactsButton;
