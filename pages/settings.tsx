import { NextPage } from "next";
import dynamic from "next/dynamic";

const ValidatorSettings = dynamic(
  () => import("../components/ValidatorSettings"),
  {
    ssr: false,
  }
);

const SettingsPage: NextPage = () => {
  return (
    <div className="pt-16 px-4">
      <ValidatorSettings />
    </div>
  );
};

export default SettingsPage;
