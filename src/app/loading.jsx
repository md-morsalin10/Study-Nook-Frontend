import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
            
            <p className="text-xs font-medium text-gray-400 mt-4  uppercase">
                Loading...
            </p>
        </div>
    );
};

export default Loading;