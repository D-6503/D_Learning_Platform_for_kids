import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = {
    title: string;
    id: number;
    imageSrc: string;
    onClick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;
};

export const Card = ({
    title,
    id,
    imageSrc,
    disabled,
    onClick,
    active
}: Props) => {
    return (
        <div
            onClick={() => onClick(id)}
            className={cn(
                "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
                disabled && "pointer-events-none opacity-50"
            )}
        >
            <div className="min-h-[24px] w-full flex items-center justify-end">
                {active && (
                    <div className="rounded-md bg-green-500 flex items-center justify-center p-1.5">
                        <Check className="text-white stroke-[4] h-4 w-4" />
                    </div>
                )}
            </div>

            {/* Optional: Add image and title display here */}
            <img src={imageSrc} alt={title} className="w-full h-[100px] object-cover rounded-md mb-2" />
            <h2 className="text-center text-sm font-medium text-neutral-800">{title}</h2>
        </div>
    );
};
