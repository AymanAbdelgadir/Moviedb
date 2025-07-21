import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, release_date, overview, id, poster_path }) => {
    // TMDB image base URL. Using w185 for card display.
    const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w185/${poster_path}`
        : 'https://via.placeholder.com/185x277?text=No+Poster+Available'; // Matches 2:3 aspect ratio

    // Truncate overview for cleaner display, adjust length as needed
    const truncatedOverview = overview.length > 120 ? `${overview.substring(0, 117)}...` : overview; // Adjusted substring length

    return (
        // Main Card Container:
        // - `w-full` makes it fill its grid column.
        // - `max-w-xs` (320px) acts as a cap, preventing it from getting too wide on very large screens.
        // - `h-auto` is correct, let content define height.
        // - `bg-white` for a cleaner background.
        // - `p-0` to remove padding from the outer card if you want the image to go edge-to-edge.
        // - `rounded-xl shadow-lg` for better visuals.
        // - `flex flex-col` for proper vertical stacking and button positioning.
        <div className="w-full max-w-xs h-auto bg-white rounded-xl shadow-lg overflow-hidden
                        flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">

            {/* Image Container */}
            {/* The `pb-[150%]` is essential for maintaining the 2:3 aspect ratio of the poster. */}
            {/* This ensures the image won't be stretched or squished awkwardly, and `object-cover` will fill the space. */}
            <div className="relative w-full pb-[150%] bg-gray-200 rounded-t-xl overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-t-xl"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/185x277?text=Image+Load+Error'; }}
                />
            </div>

            {/* Content Area */}
            {/* Use consistent padding like `p-4` or `px-4 py-3`. `px-1` is too small. */}
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-bold mb-1 text-gray-900 leading-tight line-clamp-2">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-3">
                        {release_date ? new Date(release_date).getFullYear() : 'N/A'}
                    </p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                        {truncatedOverview || 'No overview available.'}
                    </p>
                </div>

                {/* More Details Button */}
                <div className="mt-auto pt-2">
                    <Link
                        to={`/movie/${id}`}
                        className="inline-block w-full text-center px-6 py-3 rounded-full text-md font-semibold text-white
                                   bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800
                                   transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        More details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;