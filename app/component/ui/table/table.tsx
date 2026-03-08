import { ReactNode } from "react";

export default function Table({ children }: { children: ReactNode }) {
    return (
        <div className="w-full overflow-x-auto text-black rounded-lg border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
                {children}
            </table>
        </div>
    )
}