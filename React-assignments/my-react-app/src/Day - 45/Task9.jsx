import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("5");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      feedback,
      rating,
      agree,
    };

    console.log("Feedback Submitted:", finalData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          placeholder="Your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>

      <div>
        <label>Rating: </label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1 star</option>
          <option value="2">2 star</option>
          <option value="3">3 star</option>
          <option value="4">4 star</option>
          <option value="5">5 star</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to share my feedback
        </label>
      </div>

      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
