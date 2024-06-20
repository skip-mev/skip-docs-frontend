/* eslint-disable @next/next/no-img-element */
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import { FC } from "react";

interface ValidatorListItemProps {
  imageURL: string;
  name: string;
}

export const ValidatorListItem: FC<ValidatorListItemProps> = ({
  imageURL,
  name,
}) => {
  return (
    <div className="bg-[#f3f6f808] py-9 w-60 text-center rounded-lg flex-shrink-0">
      <div className="mb-3">
        <img alt={name} className="rounded-full w-14 mx-auto" src={imageURL} />
      </div>
      <p className="font-semibold text-xl">{name}</p>
    </div>
  );
};

interface ValidatorListProps {
  children: React.ReactNode;
  velocity: number;
}

const ValidatorList: FC<ValidatorListProps> = ({ children, velocity }) => {
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => {
    return `${wrap(-26.8, -60.3, v)}%`;
  });

  useAnimationFrame((t, delta) => {
    let moveBy = velocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex flex-nowrap">
      <motion.div className="flex gap-5" style={{ x }}>
        <div className="flex gap-5">{children}</div>
        <div className="flex gap-5">{children}</div>
        <div className="flex gap-5">{children}</div>
      </motion.div>
    </div>
  );
};

export default ValidatorList;
