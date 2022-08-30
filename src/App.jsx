import React, { Suspense } from "react";
import "./App.scss";

const LeftNavComponent = React.lazy(() =>
  import("LeftNav/LeftNav").catch((err) =>
    console.log("Error in importing 1", err)
  )
);
const TopNavComponent = React.lazy(() =>
  import("TopNav/TopNav").catch((err) =>
    console.log("Error in importing2 ", err)
  )
);
const ItemDetailsComponent = React.lazy(() =>
  import("ItemDetails/ItemDetails").catch((err) =>
    console.log("Error in importing3", err)
  )
);

export default function () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <TopNavComponent />
        <div className="flex">
          <LeftNavComponent />
          <ItemDetailsComponent />
        </div>
      </section>
    </Suspense>
  );
}
