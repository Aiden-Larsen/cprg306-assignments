import { StudentInfo } from "./student-info";
import PageHeader from "../components/PageHeader";

export default function Page() {
    return (
        <main>
            <PageHeader title="Week-2" description="don't have time"/>
            <h1>Shopping List</h1>
            <StudentInfo></StudentInfo>
        </main>
    );
}