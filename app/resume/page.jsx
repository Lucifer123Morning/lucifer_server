import dynamic from "next/dynamic";

const ResumeClient = dynamic(() => import("@/components/ResumeClient"), {
    ssr: false,
});

export default function ResumePage() {
    return <ResumeClient />;
}