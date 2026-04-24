import { createFileRoute } from "@tanstack/react-router";
import Profile from "../../auth/components/Profile";

export const Route = createFileRoute("/_protected/profile")({
  component: Profile,
});
