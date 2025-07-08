import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Koala Log"
};

export default function HomePage() {
    return (
        <main className="bg-[#232136] px-4 py-16">
            <div className="w-full max-w-xl ml-8">
                <h1 className="text-5xl font-bold text-white mb-6">Koala Log</h1>
                <p className="text-lg text-gray-200 mb-8">
                    A logging framework for FTC robots that generates <code className="bg-[#393552] px-1 rounded">.wpilog</code> files fully compatible with Advantage Scope. It enables rich telemetry and data capture—just like in FRC.
                </p>
                <h2 className="text-2xl font-bold text-white mb-4">Why Choose KoalaLog?</h2>
                <ul className="text-left text-gray-200 mb-8 list-disc list-inside space-y-1">
                    <li>Log key metrics</li>
                    <li>Quickly tune your robot systems</li>
                    <li>Automatically log telemetry using <code className="bg-[#393552] px-1 rounded">@AutoLog</code> annotations—no manual data handling needed</li>
                    <li>Visualize and analyze logs in AdvantageScope</li>
                    <li>Stream live data to the FTC Dashboard</li>
                    <li>Mix manual logging when you need fine-grained control</li>
                </ul>
                <p className="text-gray-300 mb-8">
                    All with minimal boilerplate, and full compatibility with AdvantageScope and FTC Dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/main" className="rounded-full bg-purple-400 hover:bg-purple-500 text-white font-semibold px-8 py-3 transition">
                        Get Started
                    </Link>
                    <a
                        href="https://github.com/Koala-Log/Koala-Log"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 flex items-center justify-center gap-2 transition"
                    >
                        <svg className="size-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>GitHub</title>
                            <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                        Star on GitHub
                    </a>
                </div>
            </div>
        </main>
    );
}
