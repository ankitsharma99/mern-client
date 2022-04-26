import React from "react";

import Poll from "../components/Poll";
import ErrorMessage from "../components/ErrorMessage";

const PollPage = ({ match, getPoll }) => {
  console.log(match);
  getPoll(match.params.id);

  return (
    <div>
      <ErrorMessage />
      <Poll />
    </div>
  );
};

export default PollPage;
// what is the best