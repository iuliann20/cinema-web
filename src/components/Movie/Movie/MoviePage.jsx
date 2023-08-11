import React, { useState } from 'react';
import { IconButton, TextField, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MovieDetails from './MovieDetails';
import ReviewSection from './ReviewSection';
import './MoviePage.css';
import { useParams } from "react-router-dom";

const MoviePage = () => {
    const { id } = useParams();
    const [newReview, setNewReview] = useState('');
    const [reviews, setReviews] = useState([
        {
            author: 'Critic 1',
            content: 'Un film uimitor! Merită să-l vezi.',
            replies: [],
        },
        {
            author: 'Spectator 1',
            content: 'M-a impresionat cu adevărat. Actorii au fost excelenți.',
            replies: [
                {
                    author: 'Critic 2',
                    content: 'Sunt de acord, a fost cu adevărat o performanță remarcabilă!',
                },
            ],
        },
    ]);

    const handleAddReview = () => {
        if (newReview.trim() !== '') {
            const updatedReviews = [...reviews, { author: 'Nou', content: newReview, replies: [] }];
            setReviews(updatedReviews);
            setNewReview('');
        }
    };

    const handleDeleteReview = (reviewIndex) => {
        const updatedReviews = [...reviews];
        updatedReviews.splice(reviewIndex, 1);
        setReviews(updatedReviews);
    };

    const handleAddReply = (reviewIndex, replyContent) => {
        const updatedReviews = [...reviews];
        updatedReviews[reviewIndex].replies.push({ author: 'Tu', content: replyContent });
        setReviews(updatedReviews);
    };

    return (
        <div className='container'>
            <MovieDetails
                movie={{
                    title: 'Numele Filmului',
                    duration: '2h 30min',
                    description: 'Un film cu încasări uriașe în box-office-ul mondial, considerat printre cele mai reușite prestații ale lui Arnold Schwarzenegger. Un story care oferă numeroase efecte speciale, împușcături și explozii formidabile, confruntări spectaculoase, dar și scene de candoare adevărată. Doi luptători din viitor sunt trimiși în trecut, prezentul nostru, unul cu misiunea expresă de a ucide o tânără femeie, celălalt de a o proteja. Primul este Terminator, un cyborg lipsit de sentimente, care trebuie să extermine victima indiferent de obstacole; al doilea este Kyle Reese, un tânăr călit în război de gherilă, care se îndrăgostește de femeia pe care o protejează și-și sacrifică viața pentru ea. De ce această luptă mortală în jurul ei? Sarah Connor este aparent o femeie banală, îngrozită de înverșunarea ferocelui cyborg de a o ucide. Kyle însă îi dezvăluie faptul că fiul pe care-l va naște într-o zi, John Connor, va deveni liderul supraviețuitorilor unui nimicitor război nuclear și va salva omenirea de revolta mașinilor.',
                    actors: ['Actor 1', 'Actor 2', 'Actor 3'],
                    imageUrl: 'https://static.cinemagia.ro/img/resize/db/movie/00/10/37/the-terminator-696522l-175x0-w-aaa90b53.jpg',
                }}
            />
            <Divider />
            <ReviewSection
                reviews={reviews}
                onAddReview={handleAddReview}
                onDeleteReview={handleDeleteReview}
                onAddReply={handleAddReply}
            />
        </div>
    );
};

export default MoviePage;
