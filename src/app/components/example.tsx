"use client";
import { useLanyardWS } from 'use-lanyard';

export default function Example() {
    const DiscordID = '218972931701735424'
    const data = useLanyardWS(DiscordID);
    if (data) {
        if (data.listening_to_spotify === false) {
            return (
                <div className="p-8 w-[33rem] bg-opacity-50 bg-black rounded-lg flex flex-col items-center justify-start font-karla">
                    <div className="w-full flex flex-row items-center justify-start">
                        <div className="ml-6 flex flex-col items-start justify-center">
                            <p className="text-xl text-gray-300 font-normal">Currently not listening to anything...</p>
                            <div className="flex flex-row">
                                <p className="text-lg text-gray-400 font-normal">Current ID:</p>
                                <p className="text-lg text-gray-400 font-normal pl-1 italic">{DiscordID}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (data.spotify) {
            return (    
                <div className="p-8 w-[33rem] bg-opacity-50 bg-black rounded-lg flex flex-col items-center justify-start font-karla">
                    <div className="w-full flex flex-row items-center justify-start">
                        {data.spotify?.album_art_url ? (
                            <img src={data.spotify!.album_art_url} className="w-[8rem] h-[8rem]" />
                        ) : (
                            <div className="w-[8rem] h-[8rem] bg-black">
                            </div>
                        )}
                        <div className="ml-6 flex flex-col items-start justify-center">
                            <p className="text-xl text-white font-semibold">{data.spotify?.song}</p>
                            <h2 className="text-lg text-gray-300 font-normal">{data.spotify?.artist}</h2>
                            <h3 className="text-lg text-gray-300 font-normal italic">in {data.spotify?.album}</h3>
                            <div className="flex flex-row">
                                <p className="text-lg text-gray-400 font-normal">Current ID:</p>
                                <p className="text-lg text-gray-400 font-normal pl-1 italic">{DiscordID}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="p-8 w-[33rem] bg-opacity-50 bg-black rounded-lg flex flex-col items-center justify-start font-karla">
                    <div className="w-full flex flex-row items-center justify-start">
                        <div className=" flex flex-col items-start justify-center">
                            <p className="text-lg text-gray-300 font-normal">Something went wrong!<br/>The ID you provided may not be correct or it is not monitored by lanyard...</p>
                        </div>
                    </div>
                </div>
            );
        };         
    } else {
        return (
            <div className="p-8 w-[33rem] bg-opacity-50 bg-black rounded-lg flex flex-col items-center justify-start font-karla">
                <div className="w-full flex flex-row items-center justify-start blur-sm">
                    <div className="w-[8rem] h-[8rem] bg-black">
                    </div>
                    <div className="ml-6 flex flex-col items-start justify-center">
                        <p className="text-xl text-white font-semibold">Loading currenty...</p>
                        <h2 className="text-lg text-gray-300 font-normal">Loading currenty...</h2>
                        <h3 className="text-lg text-gray-300 font-normal italic">Loading currenty...</h3>
                    </div>
                </div>
            </div>
        );
    };
};

