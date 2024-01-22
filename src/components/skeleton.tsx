import React, {
  FC, HTMLProps, HTMLAttributes, ReactNode,
} from 'react';

interface TextSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const TextSkeleton: React.FC<TextSkeletonProps> = ({
  className,
  children,
  ...props
}: TextSkeletonProps) => (
  <div
    {...props}
    className={`bg-skeleton text-transparent h-[10px] lg:h-[15px] animate-pulse ${
      className ?? ''
    }`}
  >
    {children}
  </div>
);

export const ImageSkeleton: FC<HTMLProps<HTMLImageElement>> = ({
  className,
  ...props
}) => (
  <div
    {...props}
    className={`bg-skeleton animate-pulse ${className ?? ''}`}
  />
);

export const ProductItemSkeleton: FC = () => (
  <div className="space-y-2">
    <ImageSkeleton className="w-full aspect-square rounded-lg" />
    <div className="px-3 space-y-2">
      <TextSkeleton className="w-fit">1234567890</TextSkeleton>
      <TextSkeleton>12345678900000000000000000000000000000000000</TextSkeleton>
      <TextSkeleton>1234567890</TextSkeleton>
      <div className="flex items-center gap-x-4">
        <ImageSkeleton className="w-[50px] h-[50px] rounded-full" />
        <TextSkeleton className="w-[30%]">20,000đ</TextSkeleton>
      </div>
    </div>
  </div>
);
