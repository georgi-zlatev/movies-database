import { Award } from "./awards";
import { User } from "./users";

export interface Movie {
    _id: string,
    name: string;
    releaseYear: number;
    genre: string[];
    cast: string[];
    plotSummary: string;
    plot: string
    userId: User,
    likes: string,
    awardId: Award  
    posterUrl: string;
    created_at: string,
    updatedAt: string,
}

export interface MovieDetails {
    _id: string,
    name: string;
    releaseYear: number;
    genre: string[];
    cast: string[];
    plotSummary: string;
    plot: string
    userId: User,
    likes: string,
    awardId: Award  
    posterUrl: string;
    created_at: string,
    updatedAt: string,
}
