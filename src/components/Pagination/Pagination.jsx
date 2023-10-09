import React from "react";
import { Pagination } from "@nextui-org/react";

export default function PaginationComponent() {
  return <Pagination isCompact showControls total={10} initialPage={1} />;
}
