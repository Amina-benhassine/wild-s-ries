import { useEffect, useState } from "react";

interface ProgramsListProps {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [program, setProgram] = useState<ProgramsListProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setProgram(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {program.map((programDetail) => (
        <article key={programDetail.id}>
          <h3>{programDetail.title}</h3>
          <img src={programDetail.poster} alt={programDetail.title} />
          <p>
            {programDetail.synopsis}
            {programDetail.year}
            {programDetail.country}
          </p>
        </article>
      ))}
    </>
  );
}

export default Programs;
