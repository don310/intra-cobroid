<<<<<<< HEAD
=======
"use server";

>>>>>>> 8657132 (first commit)
import React from "react";
import { currentUser } from "@clerk/nextjs";

async function WelcomeBanner() {
  const user = await currentUser();

  return (
    <div className="flex gap-5 items-center bg-white dark:bg-slate-900 rounded-md p-5">
      <div>
        <h2 className="text-[30px] font-bold mb-4">
          Welcome{" "}
          {user ? (
            <span className="text-primary">
              {user.firstName} {user.lastName}
            </span>
          ) : (
            <span className="text-primary">Guest</span>
          )}
        </h2>
        <p>
          Let's Learn Web Programming at{" "}
          <span className="text-primary">Intra Cobroid</span> with the Experts 😃😁
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
