import React, { useState, useEffect, useContext } from "react";
import * as Api from "../../api";
import ProjectCard from "./ProjectCard";
import { Button } from "react-bootstrap";
import ProjectEditForm from "./ProjectEditForm";
import { ForestStateContext } from "../Portfolio";

function Project({ portfolioOwnerId, isEditable }) {
  // useState 훅을 통해 user 상태를 생성함.
  const [projects, setProjects] = useState(null);
  const [isPost, setIsPost] = useState(false);
  const { setForestLength } = useContext(ForestStateContext);

  useEffect(() => {
    Api.get("project", portfolioOwnerId).then((res) => {
      setProjects(res.data);
      if (res.data.length !== 0) {
        setForestLength((prev) => {
          return { ...prev, project: true };
        });
      }
    });
  }, [portfolioOwnerId]);

  const addProject = (updateData) => {
    const newProjects = [...projects, updateData];
    setProjects(newProjects);
  };

  const editProject = (id, updateData) => {
    const newProjects = projects.map((project) =>
      project._id === id ? { ...updateData } : project
    );

    setProjects(newProjects);
  };

  return (
    <>
      {projects ? (
        projects.map((project) => {
          return (
            <ProjectCard
              key={project._id}
              isEditable={isEditable}
              project={project}
              editProjct={editProject}
            />
          );
        })
      ) : (
        <></>
      )}

      {isPost ? (
        <ProjectEditForm setIsPost={setIsPost} addEducation={addProject} />
      ) : (
        <></>
      )}
      {isEditable && !isPost ? (
        <Button variant="outline-success" onClick={() => setIsPost(true)}>
          프로젝트 추가
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}

export default Project;
