"use client";
import { useLanyardWS } from 'use-lanyard';

export default function Page({ params }: { params: { id: number } }) {
    // Ignore the Type error as it's a issue with the way they check if the number is a bigint
    if ( params.id.toString().length == 18 ) {
        const data = useLanyardWS(params.id);
        if (!data) {
            return (
                <div className="p-8 w-[33rem] backdrop-blur-xl bg-opacity-80 bg-black rounded-lg flex flex-col items-center justify-start font-karla">
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
        } else {
            if (!data.listening_to_spotify) {
                return (
                    <p>{data.discord_user.global_name} is not listening to anything right now.</p>
                );
            };
            return (
                <div className="p-8 w-[33rem] backdrop-blur-xl bg-opacity-80 bg-black rounded-lg flex flex-col items-center justify-start font-karla">
                    <div className="w-full flex flex-row items-center justify-start">
                        <img
                            src={data.spotify.album_art_url}
                            className="w-[8rem] h-[8rem]"
                        />
                        <div className="ml-6 flex flex-col items-start justify-center">
                            <p className="text-xl text-white font-semibold">{data.spotify.song}</p>
                            <h2 className="text-lg text-gray-300 font-normal">{data.spotify.artist}</h2>
                            <h3 className="text-lg text-gray-300 font-normal italic">in {data.spotify.album}</h3>
                        </div>
                    </div>
                </div>
            );
        }
    } else {
        return (
            <p>Invalid ID, it should be 18 long or the ID you provided is not being monitored by Lanyard.<br/>If you need to get started then check <a href='https://github.com/Phineas/lanyard#get-started-in--10-seconds'>https://github.com/Phineas/lanyard#get-started-in--10-seconds</a></p>
        );
    };
};