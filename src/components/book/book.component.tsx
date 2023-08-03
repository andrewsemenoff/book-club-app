import exampleImage from "../../assets/covers/LesMiserables.jpg";
import RatingInfo from "../rating-info/rating-info.component";
import { BookCardWrapper, BookShortInfo, Cover, Title } from "./book.styles";

const Book = () => {
  let bookInstance = {
    title: "Les Misérables",
    author: "Victor Hugo",
    genre: "Historical Fiction",
    year: 1862,
    pages: 1488,
    ISBN: "978-0451525260",
    isAvailable: true,
    coverImage: exampleImage,
    ratingData: {
      comments: [
        {
          text: "Wonderful book for everyone",
          readerId: 123,
          createdAt: 242356,
        },
      ],
      ratings: [{ stars: 5, readerId: 123 }, {}, {}, {}, {}],
      averageRating: 4.5,
    },
  };
  const { author, title, year, coverImage, ratingData } = bookInstance;

  return (
    <BookCardWrapper>
      <Cover image={coverImage} />
      <RatingInfo
        averageRating={ratingData.averageRating}
        totalVotes={ratingData.ratings.length}
      />
      <BookShortInfo>
        <Title>{title}</Title>
        <div>
          {author}, {year}{" "}
        </div>
      </BookShortInfo>
    </BookCardWrapper>
  );
};

export default Book;
