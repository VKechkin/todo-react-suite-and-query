import React, { useState } from "react";
// import { useQuery } from "react-query";

import Main from "@components/Main";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Loader from "@components/Loader";
import ErrorPage from "@components/ErrorPage";

import { useUserTodos } from "@hooks/useUserTodos";

import { TTodo } from "@types";

const App = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const { isLoading, error, response } = useUserTodos(String("1"), setTodos);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : response?.data.length ? (
        <Main todos={todos} setTodos={setTodos} />
      ) : (
        <ErrorPage errorMessage={error.message} />
      )}
      <Footer />
    </>
  );
};

export default App;
