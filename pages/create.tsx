import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { GetServerSideProps } from "next";
import { useSession, getSession } from "next-auth/react";
import { gql, useMutation } from "@apollo/client";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
  }

  return {
    props: {},
  };
};

const CREATE_POSTS = gql`
  mutation Posts {
    posts(data: { title: String, content: String }) {
      id
      title
      published
      createdAt
      updatedAt
      author
      content
      description
      photographers
      photos
      captions
      category
      readTime
    }
  }
`;

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_POSTS);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    mutateFunction();

    if (loading) return <p>"Loading..."</p>;
    if (error) return <p>`Error! ${error.message}`</p>;

    console.log(data);

    // try {
    //   const body = { title, content };
    //   await fetch("/api/post", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(body),
    //   });
    //   await Router.push("/drafts");
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const { data: session } = useSession();

  if (!session) {
    return (
      <Layout>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>New Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push("/")}>
            Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;
