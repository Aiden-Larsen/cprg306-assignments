import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <header>
                <h1>Welcome to the Test Pages!!</h1>
            </header>
            <div>
                <h3>Select a Page:</h3>
                <div>
                    <ol>
                        <li>Link to: <Link href="./test/array-test">Array Test</Link></li>
                        <li>Link to: <Link href="./test/button-test">Button Test</Link></li>
                        <li>Link to: <Link href="./test/arrow-function">Arrow Function Test</Link></li>
                    </ol>
                </div>
            </div>
        </main>
    )
}