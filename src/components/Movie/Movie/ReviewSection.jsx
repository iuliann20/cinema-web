import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import AddIcon from '@mui/icons-material/Add';

const ReviewSection = ({ reviews, onAddReview, onDeleteReview, onAddReply }) => {
  const [newReview, setNewReview] = useState('');

  const handleAddReply = (reviewIndex, replyContent) => {
    onAddReply(reviewIndex, replyContent);
  };

  const handleAddReview = () => {
    if (newReview.trim() !== '') {
      onAddReview(newReview);
      setNewReview('');
    }
  };

  return (
    <div className="reviewsContainer">
      <Typography variant="h5">Review-uri</Typography>
      <Divider />
      <List>
        {reviews.map((review, reviewIndex) => (
          <ListItem key={reviewIndex} className="review">
            <ListItemAvatar>
              <Avatar>{review.author[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="subtitle1" className="reviewAuthor">{review.author}</Typography>}
              secondary={<Typography variant="body2" className="reviewContent">{review.content}</Typography>}
            />
            <div className="reviewActions">
              <IconButton aria-label="Reply" onClick={() => handleAddReply(reviewIndex, `Răspuns pentru ${review.author}`)}>
                <ReplyIcon />
              </IconButton>
              <IconButton aria-label="Delete" onClick={() => onDeleteReview(reviewIndex)}>
                <DeleteIcon />
              </IconButton>
            </div>
            {review.replies.map((reply, replyIndex) => (
              <div key={replyIndex} className="reply">
                <div className="replyAvatar">
                  <Avatar>{reply.author[0]}</Avatar>
                </div>
                <div className="replyContent">
                  <Typography variant="body2">{reply.content}</Typography>
                </div>
              </div>
            ))}
          </ListItem>
        ))}
      </List>
      <div className="addReviewContainer">
        <TextField
          label="Adaugă un review"
          variant="outlined"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          className="addReviewInput"
        />
        <IconButton aria-label="Add" onClick={handleAddReview}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewSection;
