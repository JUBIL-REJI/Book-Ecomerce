import React from "react";
import "./categories.css";
import img1 from "../../assets/blog/fiction.jpeg";
import img2 from "../../assets/blog/nonfiction.jpg";
import img3 from "../../assets/blog/science.jpg";
import img4 from "../../assets/blog/mystry.jpg";
import img5 from "../../assets/blog/adult.jpg";
import img6 from "../../assets/blog/graphic.jpg";
import { useNavigate } from "react-router-dom";

function CateagoresPage() {
  const naviGate = useNavigate();

  const Table = [
    {
      id: "1",
      title: "Fiction",
      image: `${img1}`,
      desc: "A work of fiction is created in the imagination of its author. The author invents the story and makes up the characters, the plot or storyline, the dialogue and sometimes even the setting. A fictional work does not claim to tell a true story.",
    },
    {
      id: "2",
      title: "Non-Fiction",
      image: `${img2}`,
      desc: "Non-fiction (or nonfiction) is any document or media content that attempts, in good faith, to convey information only about the real world, rather than being grounded in imagination. Non-fiction typically aims to present topics objectively based on historical, scientific, and empirical information.",
    },
    {
      id: "3",
      title: "Science-Fiction",
      image: `${img3}`,
      desc: "Science fiction usually has a scientific premise at its core. For example, Jurassic Park, a novel by Michael Crichton, explores cloning. While science fiction draws on and extrapolates from what we know about reality and science, fantasy invents what does not (and likely could not) exist in our reality.",
    },
    {
      id: "4",
      title: "Mystery",
      image: `${img4}`,
      desc: "Mystery fiction can be detective stories in which the emphasis is on the puzzle or suspense element and its logical solution such as a whodunit. Mystery fiction can be contrasted with hardboiled detective stories, which focus on action and gritty realism.",
    },
    {
      id: "5",
      title: "Young Adult",
      image: `${img5}`,
      desc: "It is not a book genre, like romance or thriller or science fiction, but rather a category that describes a target age group: teens. Typically, these books are intended for ages 12-18",
    },
    {
      id: "6",
      title: "Graphic Novels",
      image: `${img6}`,
      desc: '"Graphic Novel" is a format, not a genre. Graphic novels can be fiction, non-fiction, history, fantasy, or anything in-between. Graphic novels are similar to comic books because they use sequential art to tell a story. Unlike comic books, graphic novels are generally stand-alone stories with more complex plots',
    },
  ];

  return (
    <section id="category">
      <h1
        style={{
          color: "wheat",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginTop: "19px",
          marginLeft: "20px",
        }}
      >
        CATEGORIES
      </h1>
      <div className="container-box">
        {Table.map((items, id) => {
          return (
            <div key={id} className="grid-items">
              <img className="img-1" src={items.image} alt="#" />

              <div className="overlay">
                <h3>{items.title}</h3>

                <button
                  onClick={() => naviGate(`/catecoriesdetail/${items.title}`)}
                  className="btn-one"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CateagoresPage;
