import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase'
import { SimpleGrid } from "@chakra-ui/core";
import GistSummary from './GistSummary'

const Home = () => {
  useFirestoreConnect([{collection:"gists", orderBy: ["createdAt", 'desc']}]);
   
  const gists = useSelector((state) => state.firestore.ordered.gists);
  ;
  return (
    <SimpleGrid mt={4} columns={{sm:1, md: 3}} spacing="2rem">
      {gists &&
        gists.map((gist) => {
          return (
            <Link to={`/gist/${gist.id}`} key={gist.id}>
              <GistSummary gist={gist} />
            </Link>
          );
        })}
   
     
      </SimpleGrid>
  );
};

export default Home;
