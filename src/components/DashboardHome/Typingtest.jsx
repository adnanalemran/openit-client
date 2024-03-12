import React, { useState, useEffect } from 'react';

const Typingtest = () => {
    const [text, setText] = useState("This is a typing test. Replace this with your own text.");
    const [input, setInput] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);

        if (inputValue === text) {
            setIsCompleted(true);
        }
    };

    useEffect(() => {
        if (isCompleted) {
            // Handle completion, e.g., show a success message or redirect
            console.log("Typing test completed!");
        }
    }, [isCompleted]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <p className="text-lg font-semibold mb-4">{text}</p>
                <textarea
                    className="border p-2 w-full rounded"
                    value={input}
                    onChange={handleChange}
                    placeholder="Start typing..."
                    rows="4"
                    cols="50"
                    disabled={isCompleted}
                />
                {isCompleted && (
                    <p className="text-green-500 mt-2">Typing test completed!</p>
                )}
            </div>
        </div>
    );
};

export default Typingtest;
